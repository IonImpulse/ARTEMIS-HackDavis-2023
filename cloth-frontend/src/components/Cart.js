import * as React from 'react';
import Button from '@mui/material/Button';
import './Cart.css';

export default function Cart(props) {
    const removeFromCart = (item_name) => {
        // If it exists, decrement by one

        if (item_name in props.cart) {
            if (props.cart[item_name] > 1) {
                props.setCart({
                    ...props.cart,
                    [item_name]: props.cart[item_name] - 1,
                });
            }

            if (props.cart[item_name] === 1) {
                delete props.cart[item_name];

                props.setCart({
                    ...props.cart,
                });
            }
        }
    };


    return (
        <div className='Cart'>
            {Object.entries(props.cart).map(([key, value]) => {
                return (
                    <div className="cart-item">
                        <div className="name">{key}</div>
                        <div className="quantity">Quantity: {value}</div>
                        <Button variant="contained" onClick={() => removeFromCart(key)}>x</Button>
                    </div>
                )
            })}
        </div>
    )
}