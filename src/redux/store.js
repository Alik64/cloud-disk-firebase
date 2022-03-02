import { applyMiddleware, combineReducers, createStore, } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import modalReducer from "./modalReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
    modal: modalReducer,
    user: userReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

//lifehack
window.store = store

export default store