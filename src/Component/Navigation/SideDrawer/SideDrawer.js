import React from 'react';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import Logo from '../../Logo/Logo';

const sideDrawer = ( props ) => {
    // let attachedClasses = [className="SideDrawer", className="Close"];
    // if (props.open) {
    //     attachedClasses = [className="SideDrawer", className="Open"];
    // }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className="SideDrawer">
               
                    <Logo height="11%" />               
                <nav>
            <ul className="Link">
                    <li><a href="/">Pizza Order</a></li>
                    <br/>
                    <li><a href="/Fetch">Checkout</a></li>
             </ul> 
                </nav>
            </div>
           
       </Aux>
    );
};

export default sideDrawer;