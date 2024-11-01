import React, {useState} from 'react';

import Spinner from 'react-bootstrap/Spinner';

import correctImage from '../../Assets/correct.png';

import style from './Items.module.css';

const Items = ({ id, imgSrc, name, price }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        
        setIsLoading(true);

   
        setTimeout(() => {
            setIsLoading(false);
            setIsAdded(true);

           
            setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        }, 2000);


      
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

       
        const existingItemIndex = cartItems.findIndex((item) => item.id === id);

        if (existingItemIndex !== -1) {
  
            cartItems[existingItemIndex].quantity += 1;
        } else {
   
            const newItem = { id, imgSrc, name, price, quantity: 1 };
            cartItems.push(newItem);
        }


        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    };

    return (
        <div className={style.container}>
            <div className={style.items}>
                <img src={`${process.env.PUBLIC_URL}/${imgSrc}`}  alt={name} />
                <h3>{name}</h3>
                <strong>{price}</strong>
                <button onClick={handleAddToCart}>
                    {isLoading ? (
                        <Spinner
                        animation="border"
                        role="status"
                        size="sm"
                        style={{
                            width: '20px',
                            height: '20px',
                            color: 'white',
                            borderWidth: '2px' // Ensures visibility
                        }}
                        />                    
                    ) : isAdded ? (
                        <img className={style.correctImage} src={correctImage} alt="Added to Cart"/>
                    ) : (
                        '+'
                    )}
                    {/* {isLoading ? (
    <div className={style.customSpinner}></div>
) : isAdded ? (
    <img className={style.correctImage} src={correctImage} alt="Added to Cart"/>
) : (
    '+'
)} */}
                </button>
            </div>
        </div>
    );
};

export default Items;