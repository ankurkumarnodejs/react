import React, {Component} from 'react';
import * as actionCreators from "../actions/index";
import {connect} from "react-redux"

import Box from '../component/box'

class BoxCon extends Component {
render(){
    return(
            <Box handleClick={this.props.loadColor} color={this.props.color}></Box>
            );
}

}

const mapStateToProps = (state) => {
return state;
}

export default connect(mapStateToProps, actionCreators)(BoxCon);