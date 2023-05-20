import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function LoginScreen() {
    // Create a ID number login screen
    // This should have a numpad for iPad usage
    // and should have a "Start" button


    return (
        <>
            <div className="LoginScreen">
                <div>
                    <h1>Enter Student ID number</h1>
                </div>
                <TextField id="outlined-basic" label="ID Number" variant="outlined" />

                <div className="NumPad">
                    <Button variant="contained">7</Button>
                    <Button variant="contained">8</Button>
                    <Button variant="contained">9</Button>

                    <Button variant="contained">4</Button>
                    <Button variant="contained">5</Button>
                    <Button variant="contained">6</Button>

                    <Button variant="contained">1</Button>
                    <Button variant="contained">2</Button>
                    <Button variant="contained">3</Button>

                    <Button variant="contained">0</Button>
                    <Button variant="contained">Clear</Button>
                    <Button variant="contained">Backspace</Button>

                </div><Button variant="contained">Start</Button>
            </div>
        </>
    );
}