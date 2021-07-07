import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../view/home';
import CheckoutView from '../view/checkoutView'
const Index=()=>{
return(
    <Switch>
        <Route component={Home} path={["/home" || "/"]}/>
        <Route component={CheckoutView} path= {"/checkout" }/>
    </Switch>
)
}
export default Index