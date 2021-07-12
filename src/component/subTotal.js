import React from 'react'
import './subTotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../services/StateProvider'
import { getBasketTotal } from '../services/reducer'
const SubTotal=()=>{
    const[{basket} , dispatch]= useStateValue()
return(
    <div className="subtotal">
    <CurrencyFormat

    renderText={(value)=>(
        <>
        <p >
        SubTotal ({basket.length} items): <strong>`{value}`</strong>
        </p>
        <small className="subtotal__gift"><input type="checkbox"/> this order contain a gift</small>
        </>

    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    />
    <button>proceed to checkout</button>
    </div>
)
}
export default SubTotal;