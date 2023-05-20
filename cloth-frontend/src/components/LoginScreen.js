import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function LoginScreen(props) {
    const [idNumber, setIdNumber] = useState('');

    const onChangeID = (event) => {
        setIdNumber(event.target.value);
    };

    const inputIDNumber = (num) => {
        setIdNumber(`${idNumber}${num}`);
    };

    const startButtonClicked = () => {
        props.updateIdNumber(idNumber);
    };

    const clearIDNumber = () => {
        setIdNumber('');
    };

    const backspaceIDNumber = () => {
        setIdNumber(idNumber.slice(0, -1));
    }

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
                <Button variant="contained" onClick={startButtonClicked}>
                    Start
                </Button>
            </div>
        </>
    );
}