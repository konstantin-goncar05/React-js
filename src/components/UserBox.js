import React from 'react';
import './UserBox.css';

function UserBox({setModalBox,} ) {
  return (
    <div className="UserBox">
        <button onClick={() =>setModalBox('login')}>Вход</button>
      <button onClick={() =>setModalBox('Registration')}>Регистрация</button>
      <button onClick={() =>setModalBox('AddProduct')}>Добавление товара</button>
    </div>
  );
}

export default UserBox;