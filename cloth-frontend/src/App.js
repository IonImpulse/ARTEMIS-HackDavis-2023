import * as React from 'react';
import './App.css';
import Cart from './components/Cart.js';
import LoginScreen from './components/LoginScreen.js';
import ItemSelector from './components/ItemSelector.js';

export default function App() {
  const [idNumber, setIdNumber] = React.useState('');
  const [cart, setCart] = React.useState([]);

  const updateIdNumber = (newIdNumber) => {
    setIdNumber(newIdNumber);
  };

  const addToCart = (item) => {
    // Cart is dict as such:
    /*
    {
      "Bag": 1,
      "Shirt": 2,
      "Pants": 1,
    }
    */

    // If item is already in cart, increment the count
    if (item.name in cart) {
      setCart({
        ...cart,
        [item.name]: cart[item.name] + 1,
      });
    }

    // Else, add item to cart
    else {
      setCart({
        ...cart,
        [item.name]: 1,
      });
    }
  };

  const availableItems = [
    { "name": "Bag", "num_available": 10},
    { "name": "Shirt", "num_available": 10},
    { "name": "Pants", "num_available": 10},
  ];

  return (
    <div>
      <LoginScreen updateIdNumber={updateIdNumber} />

      <div className='ItemScreen'>
        <ItemSelector
          idNumber={idNumber}
          availableItems={availableItems}
          cart={cart}
          addToCart={addToCart}
        />

        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}