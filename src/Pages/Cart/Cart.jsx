import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import Header from '../../Components/Header/Header';
import PageIntro from '../../Components/PageIntro/PageIntro';
import Footer from '../../Components/Footer/Footer';

import style from './Cart.module.css';

const Cart = () => {

    const introHeader = "Cart";
    const introParagraph = "Review your selected items, update quantities, and proceed to checkout.";

    const [products, setProducts] = useState([]);

    const [couponApplied, setCouponApplied] = useState(false); // Track if the coupon has been applied
    const [discount, setDiscount] = useState(0); // Track the discount value
    const [couponCode, setCouponCode] = useState(""); // Track the coupon code input
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
        setProducts(storedProducts);

        const checkoutDetails = JSON.parse(localStorage.getItem('checkoutDetails'));

        if (checkoutDetails && checkoutDetails.discount > 0) {
            setDiscount(parseFloat(checkoutDetails.discount)); // Apply saved discount
            setCouponApplied(true); // Set coupon as already applied
        }
    },[]);

    // Handle increasing the quantity
    const increaseQuantity = (id) => {
        const updatedProducts = products.map(product => 
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('cartItems', JSON.stringify(updatedProducts)); // Update local storage
        console.log(products);
    };

    // Handle decreasing the quantity, ensuring it doesn't go below 1
    const decreaseQuantity = (id) => {
        const updatedProducts = products.map(product => {
            if (product.id === id) {
                // Check if quantity is greater than 1 to decrement
                if (product.quantity > 1) {
                    return { ...product, quantity: product.quantity - 1 };
                } else {
                    // If quantity is 1, remove the item from the cart
                    return null; // Mark it for removal
                }
            }
            return product;
        }).filter(product => product !== null); // Filter out null items

        setProducts(updatedProducts);
        localStorage.setItem('cartItems', JSON.stringify(updatedProducts)); // Update local storage
    };


    const removeProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts); // Update the state

        // Update local storage to reflect the changes
        localStorage.setItem('cartItems', JSON.stringify(updatedProducts));
    };

    // Handle calculating the total for each product
    const calculateProductTotal = (price, quantity) => {
        return (price * quantity).toFixed(2); // Two decimal places
    };

    // Handle calculating the total for the cart
    const calculateCartTotal = () => {
        return products.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
    };

    // Handle coupon application
    const applyCoupon = () => {
        if (couponCode === "0100" && !couponApplied) {
            setDiscount(30); // Apply 30% discount
            setCouponApplied(true); // Mark coupon as applied
            setError(""); // Clear any errors


        } else if (couponApplied) {
            setError("Coupon has already been applied."); // Prevent applying again
        } else {
            setError("Invalid coupon code."); // Invalid coupon code
        }
    };

    // Handle calculating total with discount
    const calculateTotalWithDiscount = () => {
        const subtotal = calculateCartTotal();
        const discountAmount = (subtotal * (discount / 100)).toFixed(2);
        const totalWithDiscount = (subtotal - discountAmount).toFixed(2);
        return { discountAmount, totalWithDiscount, subtotal };
    };

    // Proceed to checkout and save total prices in local storage
    const checkOutBtn = () => {
        const { discountAmount, totalWithDiscount, subtotal } = calculateTotalWithDiscount();
        
        const checkoutData = {
            totalPriceBeforeDiscount: subtotal,
            discount: discountAmount,
            totalPriceAfterDiscount: totalWithDiscount,
        };

        // Save checkout details to local storage
        localStorage.setItem('checkoutDetails', JSON.stringify(checkoutData));

        navigate("/checkout"); // Navigate to checkout page
    };

    const continueShoppingBtn = () => {
        navigate("/shop"); 
    }

    return (
        <div className={style.cart}>
            <Header />

            <PageIntro 
                introHeader={introHeader} 
                introParagraph={introParagraph}
                showImage={false}
                showButtons={false}
            />

            <div className={style.cartContainer}>
                <div className={style.cartItems}>
                    {/* Cart Items Table */}
                    {products.length === 0 ? (
                            <div className={style.noItem}>
                                <h3>No items added to cart</h3>
                            </div>
                        ) : (
                            <table className={style.cartTable}>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td><img src={`${process.env.PUBLIC_URL}/${product.imgSrc}`} alt={product.name} /></td>
                                            <td>{product.name}</td>
                                            <td>${product.price.toFixed(2)}</td>
                                            <td>
                                                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                                <input type="number" value={product.quantity} readOnly />
                                                <button onClick={() => increaseQuantity(product.id)}>+</button>
                                            </td>
                                            <td>${calculateProductTotal(product.price, product.quantity)}</td>
                                            <td><button onClick={() => removeProduct(product.id)}>X</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    }
                </div>

                <div className={style.cartSummary}>
                    <div className={style.cartCoupon}>
                        
                        <button 
                            className={style.continueShopping}
                            onClick={continueShoppingBtn}
                        > 
                            Continue Shopping 
                        </button>
                        
                        
                        <div className={style.coupon}>
                            <label>Coupon</label>
                            <p>Enter your coupon code if you have one.</p>
                            <div className={style.couponInput}>
                                <input 
                                    type="text"     
                                    placeholder="Coupon Code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)} 
                                />
                                <button onClick={applyCoupon}>Apply Coupon</button>
                            </div>
                            {error && <p className={style.error}>{error}</p>}
                        </div>
                    </div>

                    {/* Cart Totals */}
                    <div className={style.totals}>
                        <h3>Cart Totals</h3>
                        <p>
                            <span>Subtotal:</span> 
                            <strong>${calculateCartTotal()}</strong>
                        </p>
                        <hr />
                        {discount > 0  && (
                            <>
                                <p>
                                    <span>Discount:</span> 
                                    <strong>- {discount.toFixed(2)}%</strong>
                                </p>
                                <hr />
                            </>
                        )}
                        <p>
                            <span>Total:</span> 
                            <strong>${calculateTotalWithDiscount().totalWithDiscount}</strong>
                        </p>
                        <button onClick={checkOutBtn} disabled={products.length === 0} >Proceed to Checkout</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;
