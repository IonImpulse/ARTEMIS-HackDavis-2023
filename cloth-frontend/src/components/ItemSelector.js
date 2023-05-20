import * as React from 'react';
import Button from '@mui/material/Button';

export default function ItemSelector(props) {

  const { availableItems, cart, addToCart } = props;

  return (
    <>
      <div className="ItemSelector">
        {availableItems.map((item) => (
          <Button
            key={item.id}
            variant="contained"
            onClick={() => addToCart(item)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="Cart">
        <h3>Cart:</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}