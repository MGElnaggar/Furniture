import { createContext, useState, useEffect } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Provide the CartContext to the app
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage when the app starts
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    // Save cart items to localStorage whenever cartItems change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            let updatedItems;
    
            if (existingItem) {
                updatedItems = prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedItems = [...prevItems, { ...product, quantity: 1 }];
            }
            
            console.log(updatedItems); // This will log the items being added to the cart
            return updatedItems;
        });
    };
        

    // Function to increment the quantity of an item
    const incrementItem = (id) => {
        setCartItems((prevItems) => 
            prevItems.map(item => 
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Function to decrement the quantity of an item
    const decrementItem = (id) => {
        setCartItems((prevItems) => 
            prevItems.map(item => 
                item.id === id && item.quantity > 1 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
            )
        );
    };

    // Function to remove an item from the cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, incrementItem, decrementItem, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};