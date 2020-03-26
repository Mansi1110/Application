import React from 'react';
import Aux from '../../Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

// class Layout extends Component{
  // state = {
  //    showSideDrawer: true
  // }

  // sideDrawerClosedHandler = () => {
  //     this.setState({showSideDrawer: false});
  // }
  // render () { 
  //   return(
    const layout =(props) => (
      <Aux>
      <Toolbar/>
        <SideDrawer />
          <main className="Content">
             {props.children}
        </main>
    </Aux>
    );

export default layout;