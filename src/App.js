// import React from 'react';
// import Layout from './Component/Layout/Layout';
// import PizzaBuilder from './Container/PizzaBuilder/PizzaBuilder';
// import './Component/Layout/Layout.css';

// function App() {
//   return (
//     <div>
//      <Layout>    
//        <img src={process.env.PUBLIC_URL + "/images.jpg"} 
//        alt="Pizza" className="margin"/>
//        <PizzaBuilder/>
//        {/* <Checkout/> */}
//      </Layout>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Order from './Order';
import Fetch from '../src/Container/PizzaBuilder/Fetch';
class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
            <div>         
                    <Switch>
                        <Route path="/" component={Order} exact/>
                        <Route path="/Fetch" component={Fetch} exact/>
                    </Switch>
            </div>
            </BrowserRouter>
    );
  }
}
export default App;