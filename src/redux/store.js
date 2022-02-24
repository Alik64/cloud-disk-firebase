import { applyMiddleware, combineReducers, createStore, } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

let reducers = combineReducers({
    modal: modalReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

//lifehack
window.store = store

export default store