import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2023');
  const filterByYear = year => {
    setSelectedYear(year);
  };
  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear().toString() === selectedYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearChange={filterByYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
