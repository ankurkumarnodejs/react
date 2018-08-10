import {combineReducers} from "redux";
import usersReducer from './users';
import activeUserReducer from './activeUser';

export default combineReducers({
    users: usersReducer,
    activeUser : activeUserReducer
});