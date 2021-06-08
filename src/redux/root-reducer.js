import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

//Full state in Redux is just a big json object
const rootReducer = combineReducers({
    user: userReducer //keys(user) that represents the individual slices of states, i.e., the actual reducers
});

export default rootReducer;