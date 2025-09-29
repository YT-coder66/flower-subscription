import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout';

import Cart from './pages/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
