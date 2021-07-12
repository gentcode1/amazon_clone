import React from "react";
import "./product.css";
import {useStateValue} from '../services/StateProvider'

const Product = ({ id, title, image, rating, price }) => {
 const [{}, dispatch]= useStateValue()
 //add items to basket
 const addToBasket=()=>{
 dispatch({
   type: 'ADD_TO_BASKET',
   items:{
     id:id,
     title:title,
     image:image,
     price:price,
     rating:rating,
   }
 })
  }
  return (
    <div className="product">
        <div className="product__info">
      <p>{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>✨</p>
          ))}
      </div>
      </div>
      
      <img src={image} alt="" className="product__image"/>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};
export default Product;
