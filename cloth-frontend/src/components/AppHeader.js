import * as React from 'react';
import Button from '@mui/material/Button';
import './AppHeader.css';

const CHECKOUT_URL = "https://us-west2-aggie-reuse-mlh-2023.cloudfunctions.net/backend-aws-dev-interaction";

export default function AppHeader(props) {
    const showLoginScreen = () => {
        document.getElementsByClassName('LoginScreen')[0].style.display = 'flex';
    }

    const sendCheckout = () => {
        let cart = {};

        for (let item in props.cart) {
            // Key in cart is name of item, value is quantity
            // Go through availableItems, find object with name that is the same,
            // and use the "key" field to add to cart
            let key = props.availableItems.find((element) => {
                return element.name == item;
            }).key;

            cart[key] = props.cart[item];
        }

        let body = JSON.stringify({
            "student_id": props.idNumber,
            "type": props.checkoutType == "donation" ? "DROP_OFF" : "PICK_UP",
            ...cart
        });

        console.log(body);

        let response = fetch(CHECKOUT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).then((response) => {
            if (response.status == 200) {
                response.json().then((json) => {
                    console.log(json);
                })
            } else {
                console.log(response);
            }

            props.setCart({});
        });
    }

    return (
        <>
            <div className="AppHeader">
                <Button variant="contained" onClick={() => showLoginScreen()}>Back</Button>
                <Button variant="contained" onClick={() => props.setCart({})}>Clear Cart</Button>
                <Button variant="contained" onClick={() => sendCheckout()}>Checkout</Button>
            </div>
        </>
    )
}