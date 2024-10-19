import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import Header from '../../Components/Header/Header';
import PageIntro from '../../Components/PageIntro/PageIntro';
import Footer from '../../Components/Footer/Footer';


import style from './CheckOut.module.css';

const PaymentMethod = [
    {
        h3 : "Direct Bank Transfer",
        p : "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
    },
    {
        h3 : "Cheque Payment",
        p : "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
    },
    {
        h3 : "PayPal",
        p : "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
    },
]

const CheckOut = () => {

    const introHeader = "Checkout";
    const introParagraph = "Complete your purchase by providing your shipping details, reviewing your order, and selecting your payment method.";

    const [openMethods, setOpenMethods] = useState(Array(PaymentMethod.length).fill(false));
    const [products, setProducts] = useState([]);
    const [price , setPrice] = useState([]);
    
    const [country, setCountry] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [postaZip, setPostaZip] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        const storedProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
        setProducts(storedProducts);
        
        const productsPrice = JSON.parse(localStorage.getItem('checkoutDetails')) || [];
        setPrice(productsPrice);

    }, []);

    const toggleOpen = (index) => {
        setOpenMethods(prevState => 
            prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z]+\.com$/;
        return emailRegex.test(email);
    };

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z]+$/;
        return nameRegex.test(name);
    };

    const validateNumber = (number) => {
        const numberRegex =  /^\d+$/;
        return numberRegex.test(number);
    };

    const orderSubmittedBtn = (e) => {

        e.preventDefault()

        setError(null);
    
        if (!validateName(firstName)) {
            setError('First name must be characters only.');
            return;
        }

        if (!validateName(lastName)) {
            setError('Last name must be characters only.');
            return;
        }

        if (!validateName(state)) {
            setError('state must be characters only.');
            return;
        }

        if (!validateNumber(postaZip)) {
            setError('posta/zip must be numbers only.');
            return;
        }
    
        if (!validateEmail(email)) {
            setError('Invalid email format. Please enter a valid email.');
            return;
        }

        if (!validateNumber(phone)) {
            setError('phone must be numbers only.');
            return;
        }


        const personalInfo = {
            country,
            firstName,
            lastName,
            address,
            state,
            postaZip,
            email,
            phone,
        };
    
        const storedInfo = JSON.parse(localStorage.getItem('orderInformation')) || [];

        storedInfo.push(personalInfo);

        localStorage.setItem('orderInformation', JSON.stringify(storedInfo));

        navigate("/order-submitted");

    };    



    return (
        <div className={style.checkOut}>
            <Header />

            <PageIntro 
                introHeader={introHeader} 
                introParagraph={introParagraph}
                showImage={false}
                showButtons={false}
            />

            <form className={style.checkOutContainer}>

                <div className={style.billingDetails}>

                    <h2>Billing Details</h2>

                    <div className={style.billingDetailsForm}>
                        <div className={style.billingDetailsContainer}>

                            {error && <div className={style.errorMessage}>{error}</div>}

                            <div className={style.singleInputForm}>
                                <label>Country <span>*</span></label>
                                <select 
                                    id="country" 
                                    required 
                                    value={country}
                                    onChange={(e) => {
                                        setCountry(e.target.value);
                                    }}
                                >
                                    <option disabled value=""> -- select an option -- </option>
                                    <option value="egypt">Egypt</option>
                                    <option value="saudi arabia">Saudi Arabia</option>
                                    <option value="morocco">Morocco</option>
                                    <option value="palestine">Palestine</option>
                                    <option value="algeria">Algeria</option>
                                    <option value="sudan">Sudan</option>
                                    <option value="lebanon">Lebanon</option>
                                </select>
                            </div>

                            <div className={style.multipleInputForm}>
                                <div className={style.singleInputForm}>
                                    <label>First Name <span>*</span></label>
                                    <input 
                                        type="text" 
                                        required
                                        id="firstName" 
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className={style.singleInputForm}>
                                    <label>Last Name <span>*</span></label>
                                    <input 
                                        type="text" 
                                        required
                                        id="lastName" 
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={style.singleInputForm}>
                                <label>Address <span>*</span></label>
                                <input 
                                    type="text" 
                                    required
                                    id="address" 
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            
                            <div className={style.multipleInputForm}>
                                <div className={style.singleInputForm}>
                                    <label>State/Country <span>*</span></label>
                                    <input 
                                        type="text" 
                                        required
                                        id="state" 
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                                <div className={style.singleInputForm}>
                                    <label>Posta/Zip <span>*</span></label>
                                    <input 
                                        type="text" 
                                        required
                                        id="postaZip" 
                                        value={postaZip}
                                        onChange={(e) => setPostaZip(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={style.multipleInputForm}>
                                <div className={style.singleInputForm}>
                                    <label>Email Address <span>*</span></label>
                                    <input 
                                        type="email" 
                                        required
                                        id="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className={style.singleInputForm}>
                                    <label>Phone <span>*</span></label>
                                    <input 
                                        type="tel" 
                                        required
                                        id="phone" 
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={style.singleInputForm}>
                                <label>Other Notes</label>
                                <textarea name="message" placeholder="Write your note here..."></textarea>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.yourOrder}>

                    <h2>Your Order</h2>
                    
                    <div className={style.yourOrderForm}>
                        <div className={style.yourOrderContainer}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {products.length > 0 ? (
                                        products.map((product, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {product.name} <strong className={style.multipleTimes}>x</strong> {product.quantity}
                                                </td>
                                                <td>${(product.price * product.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="2" style={{ textAlign: 'center' }}>No items in the cart</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td><strong>Cart Subtotal</strong></td>
                                        <td>${price.totalPriceBeforeDiscount}</td>
                                    </tr>
                                    {price.discount > 0 && (
                                        <tr>
                                            <td><strong>Discount Applied</strong></td>
                                            <td><strong>${price.discount}</strong></td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td><strong>Order Total</strong></td>
                                        <td><strong>${price.totalPriceAfterDiscount}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div>
                                {PaymentMethod.map((method, index) => (
                                    <div 
                                        key={index} 
                                        className={`${style.paymentMethod} ${openMethods[index] ? style.open : ''}`} 
                                        onClick={() => toggleOpen(index)}
                                    >
                                        <div>
                                            <h3>{method.h3}</h3>
                                            <p>{method.p}</p>
                                        </div>
                                    </div>
                                ))}

                                    <button 
                                        onClick={orderSubmittedBtn}
                                        className={style.orderBtn}
                                    > Place Order </button>
                            </div>

                        </div>
                    </div>

                </div>

            </form>

            <Footer />
        </div>
    );
};

export default CheckOut;