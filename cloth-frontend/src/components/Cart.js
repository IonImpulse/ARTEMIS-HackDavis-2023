import * as React from 'react';
import Button from '@mui/material/Button';
import './Cart.css';

export default function Cart(props) {
    const { removeFromCart } = props;
    
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