
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        // setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event,
        })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={event=>handleBudgetChange(event.target.value)}></input>
</div>
    );
};
export default Budget;