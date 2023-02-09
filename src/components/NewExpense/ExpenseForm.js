import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	}
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	}
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	}

	const submitHandler = (event) => {
		event.preventDefault();

		// create an expense data object from the individual saved state data
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount, // force number conversion
			date: new Date(enteredDate)
		};

		// console.log(expenseData);

		// instead of console.logging the expenseData, we can now execute 
		// the function that was passed as a prop
		// i.e., saveExpenseDataHandler will be executed from the parent component
		// make sure to add the () to actually execute it.
		props.onSaveExpenseData(expenseData);

		// use 'two-way binding' to reset field to empty
		// adding 'value' property to the input below allows us to do this
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	}

	// when cancel button is clicked, executes the close function 
	// of the onCancelClick prop passed down from NewExpense 
	const clickHandler = () => {
		props.onCancelClick();
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						value={enteredDate}
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={clickHandler}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;