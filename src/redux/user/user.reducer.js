const INITIAL_STATE = {
    currentUser: null
};

//This reducer will fire whenever the SET_CURRENT_USER action fires and update our state which we are pulling in the combineReducers in 'root-reducer.js'
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;