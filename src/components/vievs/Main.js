import React, {useState,useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
/*import image  from '../double_bed.jpg'
import image_2 from '../chair_grey.webp'
import image_3 from '../chest.webp'
import image_4 from '../iron.webp'
import image_5 from '../vacuum_cleaner.jpeg'
import image_6 from '../nuke.webp'
import image_7 from '../fridge.jpg'
import image_8 from '../meat_drinder.webp'
import image_9 from '../stove_electric.jpg'
import image_10 from '../bath.jpg'
import image_11 from '../shower_cabin.webp'
import image_12 from '../sink.jpg'
import image_13 from '../washing_machine.jpg'*/

function Main({setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox, token,setProductData}) { 
  const[products, setProducts] = useState([])
 
  useEffect(() => {

   const api = 'http://127.0.0.1:9001/products'

  fetch(api)
  .then(result => result.json())
  .then((result) => {
    console.log(result)
    setProducts(result.data)
  }) 
  }, [])
  


  return (
    <div className="Main">
  


  
      {products.map((item) => <Product key={item._id} id={item._id} image={item.image}
        header={item.header} price={item.price} setBasket={setBasket}
        setBasketPrice={setBasketPrice} setBasketQty={setBasketQty}
      basket={basket} setMessage={setMessage} setModalBox={setModalBox} token={token}setProductData={setProductData}   />)}
      



      
    </div>
  );





}

export default Main;