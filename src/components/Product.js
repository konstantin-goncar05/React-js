import React from 'react';
import './Product.css';

function Product({ id, image, header, price, setBasket, setBasketPrice, setBasketQty, basket,  token }) {

  const product = {
    id: id,
    image: image,
    header: header,
    price: price
  }

  function addToBasket() {
    const index = basket.findIndex(value => value.id === product.id)
    // console.debug(index)

    if (index === -1) {
      setBasket(prevState => [...prevState, product])
      setBasketPrice(current => current + product.price)
      setBasketQty(current => current + 1)
    } else {
      return
    }

    setTimeout(() => {
      console.log('Товар добавлен в корзину.')
      
    }, 100)
  }

  function AddToBasketButton() {
    if (token !== null) {
      return (
        <>
          <button  onClick={() => addToBasket()}>Купить</button>
        </>
      )
    } else {
      return (
        <>
           <button >для совершения покупки авторизуйтесь</button>
        </>
      )
    }
  }

  return (
    <div className="Product">
      <img src={product.image} alt='' />
      <h1>{product.header}</h1>
      <p>{product.price} рублей</p>
      <AddToBasketButton />
    </div>
  );
}

export default Product;
                                                                                                                           


