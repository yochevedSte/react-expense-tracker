import React, { Component } from 'react';

class SortButtons extends Component {
    render() {
        return (
            <span>
                <label>Sort by: </label>
                <button type="button" onClick={this.props.sortByHighest}>Highest</button>
                <button type="button" onClick={this.props.sortByLowest}>Lowest</button>
            </span>

        );
    }
}


export default SortButtons;