import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Checked from '../../Assets/checked.png';
import style from './OrderSubmitted.module.css';

const OrderSubmitted = () => {
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState([]);
    const [orderData, setOrderData] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
        setProducts(storedProducts);

        const productsPrice = JSON.parse(localStorage.getItem('checkoutDetails')) || [];
        setPrice(productsPrice);

        const storedOrderData = JSON.parse(localStorage.getItem('orderInformation')) || [];
        setOrderData(storedOrderData.length > 0 ? storedOrderData[0] : null);

    }, []);

    const showOrder = () => {
        setIsVisible((prev) => !prev);
        window.scrollTo(0, 0);
    };

    const backToShopBtn = () => {
        navigate("/");
        localStorage.removeItem('cartItem');
        localStorage.removeItem('orderInformation');
        localStorage.removeItem('checkoutDetails');
        console.log('Items cleared from localStorage');
    }

    const orderFields = [
        { label: 'Country', value: orderData?.country },
        { label: 'First name', value: orderData?.firstName },
        { label: 'Last name', value: orderData?.lastName },
        { label: 'Address', value: orderData?.address },
        { label: 'State', value: orderData?.state },
        { label: 'Posta/Zip', value: orderData?.postaZip },
        { label: 'Email', value: orderData?.email },
        { label: 'Phone', value: orderData?.phone },
    ];

    return (
        <div className={style.orderSubmitted}>
            <Header />

            <div className={style.container}>
                <img src={Checked} alt="Order Submitted" />
                <h1>Thank You!</h1>
                <p>Your order was successfully completed!</p>

                <div className={`${style.dataContainer} ${isVisible ? style.visible : ''}`}>

                    {orderData ? (
                        <div className={style.orderData}>
                            {orderFields.map((field, index) => (
                                <h1 key={index}>
                                    <strong>{field.label}</strong>: {field.value || 'N/A'}
                                </h1>
                            ))}
                        </div>
                    ) : (
                        <p>Loading order details...</p>
                    )}

                    
                    {products.length > 0 ? (
                        <div className={style.productList}>
                            <h2>Products Ordered</h2>
                            {products.map((product, index) => (
                                <div key={index} className={style.product}>
                                    <h3>{product.name}</h3>
                                    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                                    <p><strong>Quantity:</strong> {product.quantity}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No products found.</p>
                    )}

                    
                    {Object.keys(price).length > 0 ? (
                        <div className={style.priceDetails}>
                            <h2>Price Details</h2>
                            <p><strong>Total Price Before Discount</strong>: ${price.totalPriceBeforeDiscount}</p>
                            <p><strong>Discount</strong>: ${price.discount}</p>
                            <p><strong>Total Price After Discount</strong>: <strong>${price.totalPriceAfterDiscount}</strong></p>
                        </div>
                    ) : (
                        <p>No price details found.</p>
                    )}
                </div>

                <button onClick={showOrder}>
                    {isVisible ? "Hide my Order" : "Show my Order"}
                </button>
                <button onClick={backToShopBtn}>Back to Home</button>
            </div>

            <Footer />
        </div>
    );
};

export default OrderSubmitted;
