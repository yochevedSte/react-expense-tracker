import PropTypes from 'prop-types';
import React, { Component } from 'react';


class SingleInput extends Component {
    render() {
        return (
            <div>
                 <label>{this.props.title}</label> 
                 <input type={this.props.type } 
                 placeholder={this.props.placeholder} 
                 onChange={this.props.controlFunc }
                 value={this.props.content}
                 id={this.props.id} />
            </div>
             //onChange={ props.controlFunc } <== activate function (passed by props) on change event
             //value={props.content} <== get the value (passed by props) back from the state
        );
    }

    
}

 
SingleInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    controlFunc: PropTypes.func,
    id: PropTypes.node.isRequired

}

export default SingleInput;