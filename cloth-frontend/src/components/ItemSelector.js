import * as React from 'react';
import Button from '@mui/material/Button';
import './ItemSelector.css';

export default function ItemSelector(props) {

    const { availableItems, cart, addToCart } = props;

    let buttons = [];
    for (let i = 0; i < availableItems.length; i++) {
        let item = availableItems[i];
        let src = `/ItemIcons/${item.name}.png`;

        buttons.push(
            <Button
                key={item.id}
                variant="contained"
                onClick={() => addToCart(item)}>
                <img src={"/ItemIcons/" + item.name + ".png"} alt="" border="0" />
                {item.name}
            </Button>
        );
    }
    return (
        <>
            <div className="ItemSelector">
                <h1>Items</h1>
                <div className="Items">
                    {buttons}
                </div>
            </div>
        </>
    );
}