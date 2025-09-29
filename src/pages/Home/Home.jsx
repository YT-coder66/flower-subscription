import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home__hero">
        <h1 className="home__title">اشتراک گل ویژه</h1>
        <p className="home__subtitle">
          هر هفته گل‌های تازه و زیبا را مستقیماً به درب منزلتان دریافت کنید.
        </p>
        <button className="home__btn">شروع خرید</button>
      </div>

      <div className="home__features">
        <div className="feature">
          <h3>تنوع گل‌ها</h3>
          <p>انتخاب از بین صدها مدل گل زیبا و متنوع</p>
        </div>
        <div className="feature">
          <h3>تحویل سریع</h3>
          <p>تحویل گل‌ها در کمترین زمان ممکن</p>
        </div>
        <div className="feature">
          <h3>قیمت مناسب</h3>
          <p>اشتراک با بهترین قیمت و کیفیت عالی</p>
        </div>
      </div>
    </section>
  );
};

export default Home;