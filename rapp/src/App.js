import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import Main from './component/main';
import UserDetail from './container/userDetail';
import AddUser from './container/addUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddUser />
        <Main />
        <UserDetail />
      </div>
    );
  }
}

export default App;
