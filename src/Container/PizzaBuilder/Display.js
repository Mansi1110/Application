import React from 'react';
import './Display.css';
const Display = (props)  => (
    <div className="Display">
          <h2>Order Placed</h2>
          <strong className="strong">Vegloaded:</strong>    {props.Vegloaded} <br/>
          <strong className="strong">Margretta:</strong>    {props.Margretta}<br/>
          <strong className="strong">Triple Tango:</strong>    {props.Triple}<br/>
          <strong className="strong">Corn:</strong>    {props.Corn}<br/>
          <strong className="strong">Farm House:</strong>    {props.farm}<br/><br/><br/>
          <strong className="price">Order Amount:</strong>    {props.Price} <br/><hr/>
</div>

)
   

export default Display;