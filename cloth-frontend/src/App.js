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
    { "name": "Bag/Backpack", "num_available": 10},
    { "name": "Belt", "num_available": 10},
    { "name": "Books", "num_available": 10},
    { "name": "Dress", "num_available": 10},
    { "name": "Hat", "num_available": 10},
    { "name": "Household", "num_available": 10},
    { "name": "Jacket", "num_available": 10},
    { "name": "Long-sleeve/Button Up", "num_available": 10},
    { "name": "Pants/Jeans", "num_available": 10},
    { "name": "Ring/Jewelery", "num_available": 10},
    { "name": "School Supplies", "num_available": 10},
    { "name": "Shirt", "num_available": 10},
    { "name": "Shoes", "num_available": 10},
    { "name": "Shorts", "num_available": 10},
    { "name": "Skirt", "num_available": 10},
    { "name": "Sunglasses", "num_available": 10},
    { "name": "Sweater/Cardigan", "num_available": 10},
    { "name": "Tank Top", "num_available": 10},
    { "name": "Tie", "num_available": 10},
    { "name": "Misc", "num_available": 10},
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