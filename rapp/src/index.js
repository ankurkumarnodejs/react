import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware , compose } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers/index';
//import { loadCats } from "./actions/index";
const store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//console.log(loadCats())
//store.dispatch(loadCats());
ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>,
 document.getElementById('root')
)
registerServiceWorker();
