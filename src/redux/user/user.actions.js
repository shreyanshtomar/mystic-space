import { UserActionTypes } from './user.types';
//Actions is func that takes a parameter The user object whatever that user obj is it can be either userAuth or User snapshot obj(firebase utils)
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});