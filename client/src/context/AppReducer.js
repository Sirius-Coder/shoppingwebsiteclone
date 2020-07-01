export default (state, action) => {
    switch (action.type) {
        case 'ADDTO_CART':
            return {
                cart: state.cart.concat(action.payload)
            }


        default:
            return state;
    }
}

//! foo.push method doesn't work use concat instead