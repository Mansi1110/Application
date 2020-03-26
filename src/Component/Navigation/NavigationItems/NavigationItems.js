import React from 'react';
import './NavigationItems.css';
//import NavigationItem from './NavigationItem/NavigationItem';
  

const navigationItems = () => ( 
     <ul className="NavigationItems">
              <li><a href="/">Pizza Order</a></li>
              <li><a href="/Fetch">Checkout</a></li>

             {/* <NavigationItem link="/ord" active>Pizza Order</NavigationItem>
            <NavigationItem link="/Fetch">Fetch</NavigationItem> */}
    </ul> 
    );


export default navigationItems;

