import React, { useState } from "react";
const Form = () => {
  return (
		<form>
			<h2>Agrega tus gastos aquí</h2>
			<div className="campo">
				<label>Nombre del gasto</label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Ej. Transporter"
				/>
				<label>Cantidad del gasto</label>
				<input
					type="number"
					className="u-full-width"
					placeholder="Ej. 300"
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
