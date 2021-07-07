import React from 'react';
import {useStateValue} from '../services/StateProvider'
import advet from '../assets/home.jpg' 
import './checkout.css';
import CheckoutProduct from './checkoutProduct'
const Checkout =()=>{
    const [{ basket }] = useStateValue();
    return(
<div className="checkout">
    
    <img src={advet} alt="adv" className="checkout__image"/>
{basket?.length ===0 ? (
    <div>
    <h2>There is Nothing in your Basket</h2>
    <p> you have no item in basket , to buy one or more items  click <strong>Add To Basket</strong> next to the item</p>
    </div>
)
    :
    (
  <div>
      <h2 className="checkout__title">Your Shopping Basket</h2>
      {basket?.map(item => ( 
          
          <CheckoutProduct
          id= {item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
      )
          )}
  </div>
    )
}
</div>
    )
}
export default Checkout 