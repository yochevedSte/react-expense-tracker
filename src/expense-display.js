import React, { Component } from 'react';
import Expense from './expense';

class ExpenseDisplay extends Component {
  
    renderExpenses() {
        return  this.props.expenses.map((expense, index) => 
        <Expense removeExpense={this.props.removeExpense(index)} index={index} key={index} {...expense} editExpense={this.props.editExpense(index)}/> )

    }

    render() {
        return (
             <ul>
                {this.renderExpenses()}
            </ul>
        );
    }
}



export default ExpenseDisplay;