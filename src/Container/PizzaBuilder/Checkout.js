import React from 'react';
import Display from './Display';
import instance from '../../instance';

class Checkout extends React.Component{

    state={
        orders:[]
    }

    componentDidMount(){
        instance.get('/orders.json')
        .then (response=>{
            console.log(response.data)
            const fetchedOrders = [];
            
                for(let key in response.data){
                    fetchedOrders.unshift(
                            {
                                ...response.data[key],
                                id:key
                            }
        
                        )
               }
           
            this.setState({orders:fetchedOrders})
       
        })
    }
    render (){
        return(
            <div>
                {this.state.orders.map(order=>(
                    <Display
                    key={order.id}
                    Vegloaded={order.vegloaded}
                    Margretta={order.margretta}
                    Triple={order.triple}
                    Corn={order.corn}
                    farm={order.farm}
                    Price={order.price} />
                ))}
               
            </div>
        )
    }
}


export default Checkout;