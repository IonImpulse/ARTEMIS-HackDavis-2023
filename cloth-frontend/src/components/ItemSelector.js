import * as React from 'react';
import Button from '@mui/material/Button';
import './ItemSelector.css';

export default function ItemSelector(props) {

    const { availableItems, cart, addToCart } = props;

    return (
        <>
            <div className="ItemSelector">
                <h1>Items</h1>
                <div className="Items">
                    {availableItems.map((item) => (
                        <Button
                            key={item.id}
                            variant="contained"
                            onClick={() => addToCart(item)}>
                            <img src="ItemIcons/Backpack.jpg" alt="buttonpng" border="0" />
                            {item.name}
                        </Button>
                    ))}
                </div>
            </div>
        </>
    );
}