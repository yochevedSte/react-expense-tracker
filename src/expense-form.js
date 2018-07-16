import React, { Component } from 'react';
import SingleInput from './single-input'

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
 

        if (this.props.editMode === true) {
            this.state = { amt: this.props.amt, cat: this.props.cat, descr: this.props.descr };
        }
        else
            this.state = { amt: 0, cat: "", descr: "" };

    }
    render() {
        return (
            <div>
                <form>
                    <SingleInput id="amt" type="number" placeholder="$" content={this.state.amt} controlFunc={this.changeExpense} />
                    <SingleInput id="cat" type="text" placeholder="Category" content={this.state.cat} controlFunc={this.changeExpense} />
                    <SingleInput id="descr" type="text" placeholder="Description" content={this.state.descr} controlFunc={this.changeExpense} />
                    <button type="button" onClick={this.onBtnClick}>{this.props.buttonText}</button>
                </form>
            </div>
        );
    }

    changeExpense = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        //e.target.id <-- the element id (which matches our state)
        //e.target.value <-- the element value
        //[e.target.id] <-- is the way to define a dynamic var name
    }

    onBtnClick = () => {
        this.props.addExpense(this.state);
        this.setState({ amt: 0, cat: '', descr: '' }, () => {
        });

    }
}

export default ExpenseForm;