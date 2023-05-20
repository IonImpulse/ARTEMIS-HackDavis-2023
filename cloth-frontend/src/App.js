import * as React from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen.js';
import ItemSelector from './components/ItemSelector.js';

export default function App() {
  const [idNumber, setIdNumber] = React.useState('');
  const [cart, setCart] = React.useState([]);

  const updateIdNumber = (newIdNumber) => {
    setIdNumber(newIdNumber);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const availableItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <div>
      <LoginScreen updateIdNumber={updateIdNumber} />
      <ItemSelector
        idNumber={idNumber}
        availableItems={availableItems}
        cart={cart}
        addToCart={addToCart}
      />
      <Cart cart={cart} />
    </div>
  );
}