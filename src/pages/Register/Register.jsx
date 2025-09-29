import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const { userInfo, updateUserInfo } = useContext(UserContext);
  const [formData, setFormData] = useState(userInfo);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo(formData);
    alert('اطلاعات با موفقیت ذخیره شد!');
    navigate('/profile');
  };

  return (
    <section className="register">
      <h2>ثبت اطلاعات کاربری</h2>
      <form onSubmit={handleSubmit} className="register__form">
        <label>نام:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>ایمیل:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>تلفن:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>آدرس:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">ذخیره</button>
      </form>
    </section>
  );
};

export default Register;