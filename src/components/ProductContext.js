import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [product, setProduct] = useState([
        {
            name: 'Fender Bullet Strat',
            price: 356,
            duration: 5
        },
        {
            name: 'Keyboard',
            price: 1000,
            duration: 5
        },
        {
            name: 'PS4',
            price: 999,
            duration: 3
        }
    ]);
    return (
        <ProductContext.Provider value={[product, setProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}
