import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('سبد خرید شما خالی است!');
      return;
    }
    navigate('/checkout');
  };

  return (
    <section className="cart">
      <h2>سبد خرید شما</h2>

      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <>
          <ul className="cart__list">
            {cartItems.map(item => (
              <li key={item.id} className="cart__item">
                <img src={item.image} alt={item.name} className="cart__img" />
                <div className="cart__details">
                  <h3>{item.name}</h3>
                  <p>{item.price.toLocaleString()} تومان</p>
                  <div className="cart__quantity">
                    <label>تعداد: </label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <button
                  className="cart__remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>

          <div className="cart__footer">
            <p>جمع کل: <strong>{getTotalPrice().toLocaleString()} تومان</strong></p>
            <button onClick={handleCheckout} className="cart__checkout-btn">پرداخت</button>
            <button onClick={clearCart} className="cart__clear-btn">پاک کردن سبد خرید</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;