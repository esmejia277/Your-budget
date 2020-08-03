import React from "react";
import Expense from "./Expense";
import PropTypes from 'prop-types';


const ListExpenses = ({ expenses }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {expenses.map( expenseItem => (
      <Expense key={expenseItem.id} expenseItem={expenseItem} />
    ))}
  </div>
);

ListExpenses.propTypes = {
  expenses: PropTypes.array.isRequired
}

export default ListExpenses;
