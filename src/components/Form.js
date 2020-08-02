import React, { useState } from "react";
import shortid from 'shortid';
import Error from './Error';

const Form = ({addNewExpense}) => {

	const [expenseName, setExpenseName ] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [error, setError] = useState(false);

	const addExpense = e => {
		e.preventDefault();
		if (quantity < 1 || isNaN(quantity) || expenseName.trim() === '' ) {
			setError(true);
			return;
		}

		setError(false);
		const expense = {
			id: shortid.generate(),
			name: expenseName,
			quantity: quantity
		}

		addNewExpense(expense);

		setExpenseName('');
		setQuantity(0);

	}

  return (
		<form onSubmit={addExpense}>
			<h2>Agrega tus gastos aquí</h2>
			{
				error ?
					<Error message="Ambos campos son obligatorios o prosupuesto incorrecto" />
				:
				null
			}
			<div className="campo">
				<label>Nombre del gasto</label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Ej. Transporter"
					value={expenseName}
					onChange={e =>  setExpenseName(e.target.value)}
				/>
				<label>Cantidad del gasto</label>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ej. 300"
					value={quantity}
					onChange={e => setQuantity(parseInt(e.target.value))}
				/>
				<input
					type="submit" 
					className="button-primary u-full-width"
					value="Agregar gasto"
				/>
			</div>
    </form>
  );
};

export default Form;
