import React, { Component } from 'react';
import ExpenseForm from './expense-form'

class Expense extends Component {
    constructor(props){
        super(props);
        this.state = {editMode: false};
    }
    render() {
        return (
            <div>
                <div>${this.props.amt}, {this.props.cat}, {this.props.descr}</div>
                <button onClick={this.props.removeExpense} type="button">Remove</button>
                <button className="edit-btn" type="button" onClick= {this.handleEditClick}>Edit</button>
                { this.state.editMode && 
                <ExpenseForm addExpense={this.editExpense} editMode={this.state.editMode}
                amt={this.props.amt} cat={this.props.cat} descr={this.props.descr} buttonText="Save"/>}
            </div>
        );
    }

    handleEditClick = (e) =>{
        if(this.state.editMode === false )
            this.setState({ editMode: true});
        else
            this.setState({ editMode: false});
    }


    editExpense = (expense) => {
        this.props.editExpense(expense);
        this.setState({ editMode: false});
    }

    
}


export default Expense;