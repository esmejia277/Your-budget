import React, { useState } from "react";
import Error from './Error';

const Question = ({setBudget, setRemaining, setQuestion}) => {

	const [quantity, setQuantity] = useState(0);
	const [error, setError] = useState(false);

	const handleChangeNewBudget = e => {
		setQuantity(parseInt(e.target.value));
	}

	const addQuantity = e => {
		e.preventDefault();
		if (quantity < 1 || isNaN(quantity)) {
			setError(true);
			return
		}
		setError(false);
		setBudget(quantity);
		setRemaining(quantity);
		setQuestion(false);

	}


	return (
		<>
		<h2>Coloca tu presupuesto</h2>

		{
			error ? 
			<Error message="El presupuesto es incorrecto" />
				:
			null
		}

		<form
			onSubmit={addQuantity}>
			<input
				type="number"
				className="u-full-width"
				placeholder="Coloca tu presupuesto..." 
				onChange={handleChangeNewBudget}
			/>
			<input
				type="submit"
				className="button-primary u-full-width"
				value="Definir tu presupuesto"
			/>
		</form>
		</>
	)
};

export default Question;
