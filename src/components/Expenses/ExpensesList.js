import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
	// After refactoring so ExpensesList is a separate component, it makes
	// more sense to use a conditional return statement.
	// Also this is semantically better to render the items as a list
	if (props.items.length === 0) {
		return (<h2 className="expenses-list__fallback">No expenses found.</h2>);
	}

	// map function below will output an array of ExpenseItems which
	// React is natively able to take and render as individual ExpenseItems

	// we add a key=unique_id so that React knows which item it needs to update
	// we could use the index which is the second param in the map function, but
	// this is discouraged because the index is automatically generated and
	// may not necessarily be attached to the content of the item
	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
			))}
		</ul>
	)
}

export default ExpensesList;