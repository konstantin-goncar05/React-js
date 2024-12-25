import React from 'react';
import './Cabinet.css';
import { jwtDecode } from 'jwt-decode';

function Cabinet({ token }) {
  
            
          
          
          
        //
    function NewPassword() {

        const pass = document.getElementById('pass').value

        if (pass.length === 0) {
            document.getElementById('emailMessage').innerText = "Нет связи с сервером!"
            return
        }//
      


        const data = {
            token: token,
            password: pass
        }

        console.log(data)

        const api = 'http://127.0.0.1:9001/user/NewPassword'

        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result) => result.json())
            .then((result) => {
                console.log(result)
                document.getElementById('passMessage').innerText = result.message
            })
    }

    function removeToken() {
        const token = localStorage.getItem('token');
        if (token === null) {
          alert('Вы покидаете кабинет');
        } else {
          
          localStorage.removeItem('token');
          window.location.reload();  
    
    
        }
      } 
    


    return (
        <div className="Cabinet">
            <h1>Личный кабинет</h1>
            <p id='Cablogin'>Ваш :login {jwtDecode(token).login}</p>
            <p id='Cabemail'>Ваш E-Mail: {jwtDecode(token).email}</p>
            <p id='CabPassword'>Ваш password: {jwtDecode(token).password}</p>
            <p>После смены пороля.Выйдите и авторизуйтесь с новым паролем</p>
            <input id='pass' placeholder='Пароль' type='password' />
            <button id='sendPass' onClick={NewPassword}>Сменить пароль</button>
            <button  onClick={removeToken}>ВЫЙТИ</button>
            <p id='passMessage'></p>
        </div>
    );
}

export default Cabinet;



