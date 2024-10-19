import React from 'react';

import style from './Items.module.css';

const Items = ({ id, imgSrc, name, price }) => {

    const handleAddToCart = () => {
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
                    +
                </button>
            </div>
        </div>
    );
};

export default Items;