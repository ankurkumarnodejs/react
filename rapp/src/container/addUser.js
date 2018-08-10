import React, {Component} from 'react';
import {connect}from 'react-redux';
import  {addUser } from '../actions/index';

class AddUser extends Component {
   
    input = ""; 

    onClickAddUser = (user) => {
     this.props.addNewUser(user);
     this.input.value = "";
    }
    
    onClickAddUserOnEnter(e){
        if(e.keyCode === 13){
            this.onClickAddUser(e.target.value);
        }
       
    }

    
    render(){
    return (
        <div>
        <input 
        ref={node => this.input = node} 
        onKeyUp={(e)=> this.onClickAddUserOnEnter(e)}
         />
        <button type="button" onClick={() => this.onClickAddUser(this.input.value)}>Save</button>
        </div>);
        }
    }

const mapDispatchToProps = dispatch =>  ({
    addNewUser: text =>dispatch(addUser(text))
  });

export default connect(null, mapDispatchToProps)(AddUser);