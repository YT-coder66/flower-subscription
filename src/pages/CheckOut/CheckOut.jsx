import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { userInfo } = useContext(UserContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    if (!userInfo.name) {
      alert('لطفا ابتدا اطلاعات کاربری خود را ثبت کنید.');
      navigate('/register');
      return;
    }

    setIsProcessing(true);
    // شبیه‌سازی پردازش پرداخت با تاخیر 2 ثانیه
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section className="checkout">
      <h2>پایان خرید اشتراک گل</h2>

      {!isSuccess ? (
        <>
          <div className="checkout__user-info">
            <h3>اطلاعات کاربری</h3>
            {userInfo.name ? (
              <ul>
                <li><strong>نام:</strong> {userInfo.name}</li>
                <li><strong>ایمیل:</strong> {userInfo.email}</li>
                <li><strong>تلفن:</strong> {userInfo.phone}</li>
                <li><strong>آدرس:</strong> {userInfo.address}</li>
              </ul>
            ) : (
              <p>اطلاعات کاربری ثبت نشده است.</p>
            )}
          </div>

          <button
            className="checkout__btn"
            onClick={handleConfirmPurchase}
            disabled={isProcessing}
          >
            {isProcessing ? 'در حال پردازش...' : 'تأیید خرید اشتراک'}
          </button>
        </>
      ) : (
        <div className="checkout__success">
          <h3>خرید شما با موفقیت انجام شد!</h3>
          <p>از اعتماد شما سپاسگزاریم.</p>
          <button onClick={() => navigate('/')}>بازگشت به خانه</button>
        </div>
      )}
    </section>
  );
};

export default Checkout;