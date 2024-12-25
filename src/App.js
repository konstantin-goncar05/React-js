import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import Cabinet from './views/Cabinet';
import AddProduct from './components/AddProduct';
import CartBox from './components/CartBox';


function App() {
  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const [basket, setBasket] = useState([])
  const [basketPrice, setBasketPrice] = useState(0)
  const [basketQty, setBasketQty] = useState(0)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [productData, setProductData,savedData] = useState([null]);


  const pages = {
    Main: <Main setBasket={setBasket} setBasketPrice={setBasketPrice} setBasketQty={setBasketQty} basket={basket} savedData={savedData} setModalBox={setModalBox} token={token}settoken={setToken}setProductData={setProductData}productData={productData}/>,
    Basket: <Basket basket={basket} setBasket={setBasket} basketPrice={basketPrice} setBasketPrice={setBasketPrice} basketQty={basketQty} setBasketQty={setBasketQty} setModalBox={setModalBox}settoken={setToken}productData={productData}setProductData={setProductData} />,
     Cabinet:<Cabinet token={token}settoken={setToken} />
  }

  const modalBoxes = {
    none: null,
    login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration /></ModalBox>,
    AddProduct: <ModalBox setModalBox={setModalBox}><AddProduct /></ModalBox>,
    CartBox: <ModalBox setModalBox={setModalBox}><CartBox setModalBox={setModalBox} setBasket={setBasket} setBasketQty={setBasketQty} setBasketPrice={setBasketPrice} /> </ModalBox>
  }
  return (
    <div className="App">
     <Header setPage={setPage} setModalBox={setModalBox} />
     { pages[page] }
     { modalBoxes[modalBox] }
   
     <Footer />
    </div>
  );
}

export default App;


