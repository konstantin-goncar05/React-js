import React from 'react';


function Login() {

  function Log() {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const data = {
      login:login,
      password:password
    }
  
    console.log(data) 
    const api = 'http://127.0.0.1:9001/login'
  
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then((result) => {
      console.log(result)
      if (result.token) { window.location.reload(); 
        localStorage.setItem('token',result.token) 
      } else {
        localStorage.removeItem('token');
        window.location.reload(); 
      }
    })
  }
  
  
  return ( 
    <>
      <h1>Авторизация</h1>
       <input id='login'type='text' placeholder='введите логин' />
       <input id='password' type='password' placeholder='введите пароль' />
       <button onClick={Log}>войти</button>
    </>
  );
}

export default Login;