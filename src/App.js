import React, { Component } from 'react';
import './App.css';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display';
import SortButtons from './sort-buttons'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { expenses: [] };
  }

  render() {
    return (
      <div className="App">
        <ExpenseForm addExpense={this.addExpense} buttonText="Add Expense" />
        <SortButtons sortByHighest={this.sortByHighest} sortByLowest={this.sortByLowest}/>
        <ExpenseDisplay removeExpense={this.removeExpense} expenses={this.state.expenses} editExpense={this.editExpense} />
      </div>
    );
  }

  addExpense = (expense) => {
    this.setState({ expenses: this.state.expenses.concat(expense) });
    console.log(this.state.expenses)
  }


  removeExpense = (index) => {
    return ((e) => {
      let array = [...this.state.expenses];
      array.splice(index, 1);
      this.setState({ expenses: array });
    }
    );
  }

  editExpense = (index) => {
    return ((expense) => {
      let array = [...this.state.expenses];
     array.splice(index, 1, expense);
      this.setState({expenses: array});
    });
  }

  sortByHighest = () => {
    let array = [...this.state.expenses];
    array = array.sort((a,b) => { return (a.amt < b.amt)});
    this.setState({expenses: array});
  }

  sortByLowest = () => {
    let array = [...this.state.expenses];
    array = array.sort((a,b) => { return (a.amt > b.amt)});
    this.setState({expenses: array});
  }
}


export default App;
