import * as React from 'react';
import Button from '@mui/material/Button';
import './AppHeader.css';

export default function AppHeader(props) {
    const showLoginScreen = () => {
        document.getElementsByClassName('LoginScreen')[0].style.display = 'flex';
    }

    return (
        <>
            <div className="AppHeader">
                <Button variant="contained" onClick={() => showLoginScreen()}>Back</Button>
                <Button variant="contained" onClick={() => props.setCart({})}>Clear Cart</Button>
                <Button variant="contained">Checkout</Button>
            </div>
        </>
    )
}