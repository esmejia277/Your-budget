import React from "react";
import PropTypes from 'prop-types';

const Expense = ({ expenseItem }) => (
  <li className="gastos">
    <p>
      {expenseItem.name}
      <span key={expenseItem.id} className="gasto">$ {expenseItem.quantity}</span>
    </p>
  </li>
);

Expense.propTypes = {
  expenseItem: PropTypes.object.isRequired
}


export default Expense;
