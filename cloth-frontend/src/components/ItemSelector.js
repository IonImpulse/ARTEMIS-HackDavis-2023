import * as React from 'react';
import Button from '@mui/material/Button';
import './ItemSelector.css';

export default function ItemSelector(props) {

    const { availableItems, addToCart, removeFromCart } = props;

    let buttons = [];
    for (let i = 0; i < availableItems.length; i++) {
        let item = availableItems[i];
        let src = `/ItemIcons/${item.name}.png`;

        buttons.push(
            <div className='ItemSelectorItem'>
                <Button
                    key={item.id}
                    variant="contained"
                    onClick={() => removeFromCart(item)}>
                    -
                </Button>

                <img src={"/ItemIcons/" + item.name.replace("/", "-") + ".png"} alt="item picture" border="0" />
                <div className='item-name'>
                    {item.name}
                </div>

                <Button
                    key={item.id}
                    variant="contained"
                    onClick={() => addToCart(item)}>
                    +
                </Button>

            </div>
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