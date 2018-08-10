import React, {Component} from 'react';
import {connect}from 'react-redux';
import axios from 'axios';
import  { selectUser, getAllUsers } from '../actions/index';

class Main extends Component {
     
  componentDidMount(){
    axios.get('http://localhost:3001/getUsers')
   .then((result) => {
     this.props.loadUsers(result.data);
   }).catch((error)=>{
     console.log("err",error);
    alert("There is an error in API call.");
  });
  }
    onClickSelectedUser = (user) => {
     this.props.selectedUser(user);
    }

    render(){
    return (
    <ul>    
    {this.props.userList.map((user) => {
               return (
                        <li 
                        key={ user.id } 
                        onClick={() => this.onClickSelectedUser(user)}>
                        {user.name}
                        </li>
                      );
           })}
    </ul>
    );
    }
    }

var mapStateToProps = ((state) => { 
return {
userList : state.users
}
}
);

const mapDispatchToProps = dispatch =>  ({
    selectedUser: user =>dispatch(selectUser(user)),
    loadUsers: users =>dispatch(getAllUsers(users))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Main);