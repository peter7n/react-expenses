import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	// create a state for whether form is open or not
	const [formIsOpen, setFormIsOpen] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			// use spread operator to extract object contents and add id key
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
		// after an expense is added, close the form
		setFormIsOpen(false);
	}

	// set click handlers for opening/closing form
	const openClickHandler = () => {
		setFormIsOpen(true);
	}

	// closeClickHandler is a function that is passed to ExpenseForm 
	// through the onCancelClick prop and is executed when cancel button is clicked
	const closeClickHandler = () => {
		setFormIsOpen(false);
	}

	if (formIsOpen === true) {
		return (
			<div className='new-expense'>
				<ExpenseForm 
					onSaveExpenseData={saveExpenseDataHandler}
					onCancelClick={closeClickHandler} />
			</div>
		);
	}

	// onSaveExpenseData below is simply a prop, and we are passing a function
	// as a prop instead of a value
	return (
		<div className='new-expense'>
			<button onClick={openClickHandler}>Add New Expense</button>
		</div>
	);
};

export default NewExpense;