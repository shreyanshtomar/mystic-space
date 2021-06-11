import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
//Full state in Redux is just a big json object
const rootReducer = combineReducers({
    user: userReducer, //keys(user) that represents the individual slices of states, i.e., the actual reducers
    cart: cartReducer
});

export default rootReducer;