import React from 'react';

import image from '../../assets/images/download.jpg';
import './Logo.css';

const logo = (props) => (
    <div className="Logo"style={{height: props.height}}>
        <img src={image} alt="MyPizza" />
    </div>
);

export default logo;