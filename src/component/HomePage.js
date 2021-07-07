import React from 'react';
import './homePage.css'
import Home from '../assets/homepage.jpg'
import Product from '../component/product'
import productImage from '../assets/product1.jpg'
const HomePage=()=>{
return(
    <div className="home">
    <img className="home__image"src={Home} alt="home"/>
    <div className="home__row">
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={5}
    image={productImage}
    />
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={4}
    image={productImage}
    />
    </div>

    <div className="home__row">
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={3}
    image={productImage}
    />
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={1}
    image={productImage}
    />
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={5}
    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
    />
    </div>

    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={3}
    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    />
    </div>
)
}
export default HomePage; 