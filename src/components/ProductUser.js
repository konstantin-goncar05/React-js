import React from 'react';
import './ProductUser.css';

function ProductUser({header,image,price}) {
  return (
    <div className="ProductUser">
      <img  alt = ""src = {image}/>
      <h1>lenovo</h1>
      <p>price руб` </p>
      <button> удалить </button>
    </div>
  );
}

export default ProductUser;