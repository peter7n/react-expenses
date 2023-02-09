import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const selectChangeHandler = (event) => {
    // We don't need to track state here, since we're lifting state up
    // to Expenses.js - that's where state should be stored

    // Pass the entered year up to Expenses
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.select} onChange={selectChangeHandler} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;