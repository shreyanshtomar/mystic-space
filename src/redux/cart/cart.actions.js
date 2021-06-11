import CartActionTypes from "./cart.types";

export const toggleCardHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}