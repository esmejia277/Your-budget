import React from 'react';
import PropTypes from 'prop-types';
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

ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}
  
export default ControlBudget;