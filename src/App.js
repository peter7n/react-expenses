import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// To dynamically add items to the array of items, we need to use state with the
// initial value being the dummy expenses. However, to add new items to this (that is,
// updating state that depends upon a previous snapshot of a state), we must use the 'function form'
// of the setExpenseArr and pass it a function. The prevExpenses parameter (name doesn't matter)
// is automatically set by React. And then use the spread operator to 'deconstruct' the array and
// add the new item to it

// We must then set the props that we pass to the Expenses.js component as expenseArr
// which is the current state value automatically generated by useState. This used to be
// set to the static DUMMY_EXPENSES array

const App = () => {
 const [expenseArr, setExpenseArr] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenseArr((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseArr} />
    </div>
  );
}

export default App;
