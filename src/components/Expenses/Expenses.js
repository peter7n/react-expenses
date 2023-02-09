import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
	// We can set a default value for the dropdown by setting 
	// the initial value in useState and then using two-way binding
	const [enteredFilterYear, setEnteredFilterYear] = useState('2020');
	const filteredExpenses = props.items.filter((expense) =>
		expense.date.getFullYear() === Number(enteredFilterYear));

	const changeFilterHandler = (enteredYear) => {
		setEnteredFilterYear(enteredYear);
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					select={enteredFilterYear}
					onChangeFilter={changeFilterHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	)
}

export default Expenses;