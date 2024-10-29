import React, {useState} from 'react';

import Spinner from 'react-bootstrap/Spinner';

import correctImage from '../../Assets/correct.png';

import style from './Items.module.css';

const Items = ({ id, imgSrc, name, price }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        
        setIsLoading(true);

        // Set timeout to revert back to the + symbol after 5 seconds
        setTimeout(() => {
            setIsLoading(false);
            setIsAdded(true);

            // Show the "item added" icon for 2 seconds
            setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        }, 2000);


        // Get the current cart items from localStorage, or set it to an empty array if none exist
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item already exists in the cart by checking its id
        const existingItemIndex = cartItems.findIndex((item) => item.id === id);

        if (existingItemIndex !== -1) {
            // If item exists, increment its quantity
            cartItems[existingItemIndex].quantity += 1;
        } else {
            // If item doesn't exist, add it to the cart with a quantity of 1
            const newItem = { id, imgSrc, name, price, quantity: 1 };
            cartItems.push(newItem);
        }

        // Save the updated cart to localStorage
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
                            size="sm" // Try "lg" or "md" if "sm" is too small
                            style={{ width: '20px', height: '20px', margin: 'auto', color: 'white' }}
                        />
                    ) : isAdded ? (
                        <img className={style.correctImage} src={correctImage} alt="Added to Cart"/>
                    ) : (
                        '+'
                        // <img className={style.correctImage} src={correctImage} alt="Added to Cart"/>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Items;