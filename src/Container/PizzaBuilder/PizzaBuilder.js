import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import PizzaControls from '../../Component/PizzaControls/PizzaControls';
import Modal from '../../Component/UI/Modal/Modal';
import OrderSummary from '../../Component/PizzaControls/OrderSummary/OrderSummary';
import instance from '../../instance';
//import Checkout from './Checkout';
//import Display from './Display';

const INGREDIENT_PRICES = {
    vegloaded: 100,
    margretta: 120,
    triple: 120,
    corn: 60,
    farm: 100
}

class PizzaBuilder extends Component {

    state = {
         ingredients:
        {
            vegloaded: 0,
            margretta: 0,
            triple: 0,
            corn: 0,
            farm: 0
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: false
    }

    // componentDidMount () {
    //     axios.get('https://mypizza-1d7d3.firebaseio.com/')
    //     .then(response => {
    //         console.log(response);
    //         this.setState({ingredients: response.data})
    //     });
    // }

    // componentDidMount(){
    //         instance.get('/orders.json')
    //         .then (response=>{
    //         console.log(response.data)
    //         const fetchedOrders = [];
    //        for(let key in response.data){
    //             fetchedOrders.push(
    //                 {
    //                     ...response.data[key],
    //                     id:key
    //                 }

    //             )
    //         }
    //         this.setState({orders:fetchedOrders})
    //     })
    // }
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
            
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
       // alert('You Continue!');
        const order ={
            vegloaded: this.state.ingredients.vegloaded,
            margretta: this.state.ingredients.margretta,
            triple: this.state.ingredients.triple,
            corn: this.state.ingredients.corn,
            farm: this.state.ingredients.farm,
            price: this.state.totalPrice,
       }

        instance.post('/orders.json',order)
        .then( response => console.log(response))
        .catch(error => console.log(error));
    }
 
    render (){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
           
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                 purchaseCancelled={this.purchaseCancelHandler} 
                  purchaseContinued={this.purchaseContinueHandler} />
                </Modal>

                <PizzaControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchaseable={this.state.purchaseable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice} />
                         {/* <div>
                {this.state.ingredients.map(order=>(
                    <Display
                    key={order.id}
                    Vegloaded={order.vegloaded}
                    Margretta={order.margretta}
                    Triple Tango={order.triple}
                    Corn={order.corn}
                    Farm House={order.farm} />
                ))}
            </div> */}
             {/* <Checkout/> */}
             {/* <div>
                {this.state..map(result=>(
                    <Display
                    key={result.id}
                    ingredients={result.ingredients}
                    price={result.price}
                    />
                ))}
            </div> */}
            </Aux>
        );
    }
}

export default PizzaBuilder;