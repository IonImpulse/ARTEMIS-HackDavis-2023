import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './LoginScreen.css'

export default function LoginScreen(props) {
    const [idNumber, setIdNumber] = useState('');

    const onChangeID = (event) => {
        setIdNumber(event.target.value);
    };

    const inputIDNumber = (num) => {
        setIdNumber(`${idNumber}${num}`);
    };

    const startDonation = () => {
        props.updateIdNumber(idNumber);
        props.setCheckoutType("donation");

        // Hide the login screen
        document.getElementsByClassName('LoginScreen')[0].style.display = 'none';
    };

    const startSale = () => {
        props.updateIdNumber(idNumber);
        props.setCheckoutType("sale");

        document.getElementsByClassName('LoginScreen')[0].style.display = 'none';
    };

    const clearIDNumber = () => {
        setIdNumber('');
    };

    const backspaceIDNumber = () => {
        setIdNumber(idNumber.slice(0, -1));
    };

    return (
        <>
            <div className="LoginScreen">
                <div>
                    <h1>Enter Student ID number</h1>
                </div>
                <TextField
                    showSoftInputOnFocus={false}
                    label="ID Number"
                    variant="outlined"
                    onChange={onChangeID}
                    value={idNumber}
                />

                <div className="NumPad">
                    {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].map((num) => (
                        <Button
                            key={num}
                            variant="contained"
                            onClick={() => inputIDNumber(num)}
                        >
                            {num}
                        </Button>
                    ))}
                    <Button variant="contained" onClick={() => clearIDNumber()}>Clear</Button>
                    <Button variant="contained" onClick={() => backspaceIDNumber()}>←</Button>
                </div>

                <div className="login-buttons">
                    <Button className="donation" variant="contained" onClick={() => startDonation()}>
                        Donation
                    </Button>
                    <Button className="sale" variant="contained" onClick={() => startSale()}>
                        Sale
                    </Button>
                </div>
            </div>
        </>
    );
}