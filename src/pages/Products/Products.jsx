import React, { useState, useEffect, useContext } from 'react';
import './Products.css';
import { products as mockProducts } from '../../mockData';
import { CartContext } from '../../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // شبیه‌سازی دریافت داده از API با تاخیر
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockProducts);
        }, 1000);
      });
    };

    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <section className="products">
      <h2 className="products__title">محصولات گلخانه</h2>
      {products.length === 0 ? (
        <p className="products__loading">در حال بارگذاری...</p>
      ) : (
        <div className="products__grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-card__image" />
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__desc">{product.description}</p>
              <p className="product-card__price">{product.price.toLocaleString()} تومان</p>
              <button className="product-card__btn" onClick={() => addToCart(product)}>خرید اشتراک</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;