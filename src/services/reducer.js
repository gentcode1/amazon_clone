export const initialState = {
  basket: [
    {
      id: "1234554",
      title:
        "The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy",
      price: 11.96,
      rating: 5,
      image: "E:/AmazonClone/amazonclone/src/assets/adv.jpg",
    },
    {
      id: "1234564",
      title:
        "The Leon Startup:fdtdgchhgvf y f gjh kkljfhgg fdtgfghghbu ihihooiuuiupup iyufyftycdrffbghlioy",
      price: 11.96,
      rating: 3,
      image: "E:/AmazonClone/amazonclone/src/assets/adv.jpg",
    },
  ],
  user: null,
};
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
