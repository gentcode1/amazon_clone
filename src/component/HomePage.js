import React from 'react';
import './homePage.css'
import Home from '../assets/homepage.jpg'
import Product from '../component/product'
import productImage from '../assets/product1.jpg'
const HomePage=()=>{
return(
    <div className="home">
    <img className="home__image"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home"/>
    <div className="home__row">
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={5}
    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
    />
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={4}
    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg"
    />
    </div>

    <div className="home__row">
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={3}
    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg"
    />
    <Product
    id="1234564"
    title="The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy"
    price={11.96}
    rating={1}
    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
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