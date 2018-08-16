import React, { Component } from 'react';
import BoxCon from './container/box-container';
import { createStore, applyMiddleware , compose } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer  from './reducer/index';
import './App.css';
const store = createStore(mainReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BoxCon></BoxCon>
      </Provider>
    );
  }
}

export default App;
