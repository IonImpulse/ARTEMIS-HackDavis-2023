import * as React from 'react';
import './App.css';
import Cart from './components/Cart.js';
import LoginScreen from './components/LoginScreen.js';

export default function App() {
  return (
    <div>
      <LoginScreen />
      <Cart cart={{backpacks:5, shirts:20, pants:80}}/>
    </div>
  );
}
