export const initialState = {
  basket: [
    {
      id: "1234554",
      title:
        "The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy",
      price: 11.96,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg",
    },
    {
      id: "1234564",
      title:
        "The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy",
      price: 11.96,
      rating: 3,
      image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24",
    },
  ],
  user: null,
};
export const getBasketTotal=(basket)=> basket?.reduce((amount,item)=>item.price + amount, 0
)
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET": 
      //adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //remove item from basket
      let newBasket = [...state.basket];
      let index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
       
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product(id:${action.id}) as its not exist`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default reducer;
