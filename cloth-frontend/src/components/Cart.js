import * as React from 'react';

export default function Cart(props) {

    return (
        <div>
            {Object.entries(props.cart).map(([key, value]) => {
                return (
                    <div>
                        <h1>{key}</h1>
                        <h2>{value}</h2>
                    </div>
                )
            })}
        </div>
    )
}