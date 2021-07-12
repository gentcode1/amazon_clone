import React from 'react';
import {useStateValue} from '../services/StateProvider'
import advet from '../assets/home.jpg' 
import './checkout.css';
import CheckoutProduct from './checkoutProduct'
import SubTotal from './subTotal'
import CurrencyFormat from 'react-currency-format'
const Checkout =()=>{
    const [{ basket }] = useStateValue();
    return(
<div className="checkout">
    
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg" alt="adv" className="checkout__image"/>
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
    )}
  {basket.length > 0 && (
    <div className="checkout__right">
    
    <SubTotal/>
    </div>
  )}
    


</div>

    )
}
export default Checkout 