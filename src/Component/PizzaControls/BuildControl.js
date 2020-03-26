import React from 'react';
import './BuildControl.css';
 const BuildControl = (props) => (
     <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Add" 
        onClick={props.added}>Add</button>
        <button className="Remove"
         onClick={props.removed}>Remove</button>
     </div>
 );
 export default BuildControl;