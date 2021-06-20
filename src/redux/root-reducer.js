import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //Local Storage object on our window browser

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //any reducer that we wanna persist and since user persistance is taken care by firebase we are not using it here
}

//Full state in Redux is just a big json object
const rootReducer = combineReducers({
    user: userReducer, //keys(user) that represents the individual slices of states, i.e., the actual reducers
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);//It's now modified version of rootReducer with added capabilities for persisting data