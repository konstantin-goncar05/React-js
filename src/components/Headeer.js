import React from 'react'; // импорт React
import './Header.css';


function Header({ setPage, setModalBox, token, setToken }) {
    function BasketRequest() {
       const token = localStorage.getItem('token')
   
  
      if (token !== null) { console.log('ТОКЕН ЕСТЬ!!!');
        return (
          <>
            <li onClick={() => setPage('Basket')}>Корзина</li>
            <li onClick={() => setPage('Cabinet')}>Кабинет</li>
          </>
        )
      }
      else{console.log('НЕТ ТОКЕНА !!!')}
    }
    return (
      <div className="Header">
        <ul>
          <li onClick={() => setPage('Main')}>Главная</li>
          <BasketRequest />
        </ul>
        <UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} />
      </div>
    );
  }
     
  export default Header;