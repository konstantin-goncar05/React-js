import React, { useState } from 'react';
import './ProductBasket.css';

function ProductBasket({ id, image, header, price, setBasket, setBasketPrice, setBasketQty }) {

  const [qty, setQty] = useState(1)

  function deleteBasket() {
    setBasket(current => current.filter(product => product.id !== id));
    setBasketPrice(current => current - (price * qty));
    setBasketQty(current => current - qty);
  }

  function plus() {
    setQty(current => current + 1);
    setBasketPrice(current => current + price);
    setBasketQty(current => current + 1);
  }

  function minus() {
    if (qty > 1) {
      setQty(current => current - 1);
      setBasketPrice(current => current - price);
      setBasketQty(current => current - 1);
    }
  }

  return (
    <div className="ProductBasket">
      <img src={image} alt=' фото товар ' />
      <h1>{header}</h1>
      <p>{price} рублей</p>
  
      
  <div className='basketProd'>
        <button className='minus' onClick={() => minus()}>-</button>
        <p className='qty'>{qty}</p>
        <button className='plus' onClick={() => plus()}>+</button><br/>
        <button className='del' onClick={() => deleteBasket()}>Удалить</button>
   </div>
    </div>
  );
}

export default ProductBasket;