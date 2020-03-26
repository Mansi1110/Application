import React from 'react';
import Aux from '../../../hoc/Aux';
import './Button.css';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map( igKey => {
        return (
            <li key={igKey}> 
                <span style={{ textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li> );
    });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Pizza</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price} </strong></p>
            <p>Continue to Checkout?</p>
            <button className="Danger" onClick={props.purchaseCancelled} >Cancel</button>
            <button className="Success" onClick={props.purchaseContinued} >Continue</button>
        </Aux>
    );
};

export default orderSummary;