import React from 'react';

function AddProduct({ setModalBox, setMessage }) {

  function handleSubmit() {
    const header = document.getElementById('header').value;
    const price = document.getElementById('price').value;
    
    const data = {
        header: header,
        price: Number( price)
    }

    // console.debug(data)

    const api = 'http://127.0.0.1:9001/products/add'

    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => result.json())
      .then((result) =>  console.log(result)) 
      window.location.reload();


  }

  return (
    <div className="AddProduct">
      <h1>Добавление товара</h1>
      <input id='header' placeholder='Название товара' type='text' />
      <input id='price' placeholder='Цена товара' type='text' />
      <button id='send' onClick={handleSubmit}>Добавить</button>
      <p id='addProductError'></p>
    </div>
  );
}
export default AddProduct;