// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './App';
// import NavigationItems  from '../src/Component/Navigation/NavigationItems/NavigationItems';
// import Fetch from '../src/Container/PizzaBuilder/Fetch';

// class Order extends React.Component{
//   render(){
//     return(
//       <BrowserRouter>
//             <div>
//                 <NavigationItems>
//                     <Switch>
//                         <Route path="/ord" component={App} exact/>
//                         <Route path="/Fetch" component={Fetch} exact/>
//                     </Switch>
//                 </NavigationItems>
//             </div>
//             </BrowserRouter>
//     );
//   }
// }
import React from 'react';
import Layout from './Component/Layout/Layout';
import PizzaBuilder from './Container/PizzaBuilder/PizzaBuilder';
import './Component/Layout/Layout.css';
const Order=() => {
  return (
    <div>
      
     <Layout>
       <img src={process.env.PUBLIC_URL + "/images.jpg"} 
       alt="Pizza" className="margin"/>
       <PizzaBuilder/>
       {/* <Checkout/> */}
     </Layout>
    </div>
  );
}

export default Order;






