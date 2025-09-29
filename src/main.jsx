import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/Css/global.css';

import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';  // حتما این رو وارد کن

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
)
