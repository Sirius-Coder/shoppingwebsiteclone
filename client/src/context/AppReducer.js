export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: state.cart.concat([action.payload]),
      };
    case 'PRODUCT_DISPLAY':
      return {
        ...state,
        product: action.payload,
      };

    case 'DEL_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return (
            item.id != action.payload.id && item.title != action.payload.title
          );
        }),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
