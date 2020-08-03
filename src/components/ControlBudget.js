import React from 'react';
import {checkBudget} from '../helpers';

const ControlBudget = ({budget, remaining}) => {
    console.log(remaining)
    return (
        <>
        <div className="alert alert-primary">
            Presupuesto: $ {budget}
        </div>

        <div className={checkBudget(budget, remaining)}>
            Restante: ${remaining}
        </div>

        </>
    )
}
 
export default ControlBudget;