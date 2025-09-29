import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Profile.css';

const Profile = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <section className="profile">
      <h2>پروفایل کاربری</h2>
      {userInfo.name ? (
        <div className="profile__info">
          <p><strong>نام:</strong> {userInfo.name}</p>
          <p><strong>ایمیل:</strong> {userInfo.email}</p>
          <p><strong>تلفن:</strong> {userInfo.phone}</p>
          <p><strong>آدرس:</strong> {userInfo.address}</p>
        </div>
      ) : (
        <p>اطلاعات کاربری ثبت نشده است.</p>
      )}
    </section>
  );
};

export default Profile;