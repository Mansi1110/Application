import React from 'react';
import BuildControl from './BuildControl';
import './PizzaControls.css';

const controls = [
    { label: 'Vegloaded', type: 'vegloaded'},
    { label: 'Margretta', type: 'margretta'},
    { label: 'Triple Tango', type: 'triple'},
    { label: 'Corn', type: 'corn'},
    { label: 'Farm House', type: 'farm'}
];

 const PizzaControls = (props) => (
     <div className="PizzaControls">
         <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
          {controls.map(ctrl => (
              <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type) } 
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
          ))}
          <button className="OrderButton"
          disabled={!props.purchaseable}
          onClick={props.ordered}>ORDER NOW</button>
     </div>
 );
 export default PizzaControls;



