import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">گل‌خانه</div>
      <nav className="header__nav">
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>خانه</NavLink>
        <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>محصولات</NavLink>
        <NavLink to="/profile" className={({isActive}) => isActive ? 'active' : ''}>پروفایل</NavLink>
        <NavLink to="/register" className={({isActive}) => isActive ? 'active' : ''}>ثبت نام</NavLink>
        <NavLink to="/cart" className={({isActive}) => isActive ? 'active' : ''}>سبد خرید</NavLink>
      </nav>
    </header>
  );
};

export default Header;