import React, {Component} from 'react';

class Box extends Component {
render(){
      return(
            <div className="wrapper">
            <div className="box" style={{
                backgroundColor: `${this.props.color}`
            }}>
                <button onClick={() => {
                    this.props.handleClick()
                }}> Change Color </button>
            </div>
            </div>
            );
}

}
export default Box;