import * as React from 'react';
import './App.css';
import Cart from './components/Cart.js';
import LoginScreen from './components/LoginScreen.js';
import ItemSelector from './components/ItemSelector.js';
import AppHeader from './components/AppHeader';

const FIELD_API = "https://us-west2-aggie-reuse-mlh-2023.cloudfunctions.net/backend-aws-dev-get-fields";
const TOTALS_API = "https://us-west2-aggie-reuse-mlh-2023.cloudfunctions.net/backend-aws-dev-get-totals";

export default function App() {
  const [fields, setFields] = React.useState({});
  const [totals, setTotals] = React.useState({});

  React.useEffect(() => {
    fetch(TOTALS_API).then((response) => {
      if (response.status == 200) {
        response.json().then((json) => {
          setTotals(json);
        })
      }
    });
  }, []);

  React.useEffect(() => {
    fetch(FIELD_API).then((response) => {
      if (response.status == 200) {
        response.json().then((json) => {
          setFields(json);
        })
      }
    });
  }, []);


  const [idNumber, setIdNumber] = React.useState('');
  const [cart, setCart] = React.useState([]);
  const [checkoutType, setCheckoutType] = React.useState('');

  window.addEventListener('keydown', (event) => {
    if (event.key == ';') {
      event.preventDefault();
      document.getElementsByClassName('LoginScreen')[0].style.display = 'flex';
      document.getElementsByTagName('input')[0].focus();
    } else if (event.key === '?') {
      event.preventDefault();
    }
  });

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

  const removeFromCart = (item) => {
    // If it exists, decrement by one

    if (item.name in cart) {
        if (cart[item.name] > 1) {
            setCart({
                ...cart,
                [item.name]: cart[item.name] - 1,
            });
        }

        if (cart[item.name] === 1) {
            delete cart[item.name];

            setCart({
                ...cart,
            });
        }
    }
};

  let availableItems = fields;

  for (let i = 0; i < availableItems.length; i++) {
    availableItems[i].num_available = totals[availableItems[i].key];
  }
    
  return (
    <div>
      <LoginScreen updateIdNumber={updateIdNumber} setCheckoutType={setCheckoutType} checkoutType={checkoutType} setCart={setCart} />

      <div className='ItemScreen'>
        <AppHeader idNumber={idNumber} cart={cart} setCart={setCart} checkoutType={checkoutType} availableItems={availableItems}/>

        <ItemSelector
          idNumber={idNumber}
          availableItems={availableItems}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />

        <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}