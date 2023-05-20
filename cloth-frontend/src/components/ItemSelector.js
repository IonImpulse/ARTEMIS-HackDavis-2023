import * as React from 'react';
import Button from '@mui/material/Button';
import './ItemSelector.css';

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
    </>
  );
}