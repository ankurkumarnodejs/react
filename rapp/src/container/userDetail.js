import React, {Component} from 'react';
import {connect}from 'react-redux';

class UserDetail extends Component {
render(){
    return (
        <div>
            {this.props.user.name}
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail)