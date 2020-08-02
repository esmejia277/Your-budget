import React from "react";
import Expense from "./Expense";

const ListExpenses = ({ expenses }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {expenses.map( expenseItem => (
      <Expense key={expenseItem.id} expenseItem={expenseItem} />
    ))}
  </div>
);

export default ListExpenses;
