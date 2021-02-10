import React, { useState, createContext } from 'react';

export const SaveProductContext = createContext();

export const SaveForLateProductProvider = props => {
    const [saveForLater, setSaveForLater] = useState([
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
        <SaveProductContext.Provider value={[saveForLater, setSaveForLater]}>
            {props.children}
        </SaveProductContext.Provider>
    )
}
