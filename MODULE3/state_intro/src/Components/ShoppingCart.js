// Write a shopping cart Component.
// an array of state that keeps track of what's in the cart.
// And two buttons. Oranges, and Apples. When clicking on a button it should
// add it to the cart.

// BONUS:
// Build another component that receives the cart array and
// diplays a list of each item.


// ... the spread operator -> good for concatting arrays, duplicating arrays
// let arr = [1, 2, 3, 4]
// ...arr  =/>  1, 2, 3, 4 
// let newArr = [5, 6, ...arr, 7, 8]

// let looseArgs = 1, 2, 3, 4 
// ...looseArgs /=> [1, 2, 3, 4]

import { Component } from 'react';
import ShoppingItemIndex from "./ShoppingItemIndex";
import ShoppingForm from "./ShoppingForm";
// import uuid from "react-uuid";

// addOrange = () => {
//     // const newArr = ["orange", ...this.state.cart]
//     // this.setState({cart: newArr})
//     this.setState((prevState) => ({cart: ["orange", ...prevState.cart]}))
// }
// addApple = () => {
//     this.setState((prevState) => ({cart: ["apple", ...prevState.cart]}))
    
// }
let uuid = 1; 
class ShoppingCart extends Component {
    state = { cart: [] }

    
    addFruit = (fruit) => {
        // console.log(e.target)
        const newFruit = {id: uuid++, type: fruit}
        this.setState((prevState) => ({cart: [newFruit, ...prevState.cart]}))
    }

    removeFruit = (id) => {
        const filterArr = this.state.cart.filter((item) => item.id !== id)
        this.setState({cart: filterArr})
    }

    render() {
        // console.log(this.state.cart)
        const { cart } = this.state; 
        return(
            <section>
                <h1>Shopping Cart!</h1>
                <ShoppingForm addItem={this.addFruit}/>
                <button onClick={() => this.addFruit("orange")} value={"orange"}>Orange</button>
                <button onClick={() => this.addFruit("apple")} value={"apple"}>Apple</button>
                {/* <button onClick={() => addFruit("pineeapple")} >Pineapple</button> */}
                <ShoppingItemIndex cart={cart} removeFruit={this.removeFruit}/>
            </section>
        )
    }
}

export default ShoppingCart; 