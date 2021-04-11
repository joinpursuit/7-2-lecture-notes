// Write a shopping cart Component.
// an array of state that keeps track of what's in the cart.
// And two buttons. Oranges, and Apples. When clicking on a button it should
// add it to the cart.

// BONUS:
// Build another component that receives the cart array and
// diplays a list of each item.


import { Component } from 'react';

class ShoppingCart extends Component {
    state = { cart: [] }

    // addOrange = () => {
    //     // const newArr = ["orange", ...this.state.cart]
    //     // this.setState({cart: newArr})
    //     this.setState((prevState) => ({cart: ["orange", ...prevState.cart]}))
    // }
    // addApple = () => {
    //     this.setState((prevState) => ({cart: ["apple", ...prevState.cart]}))
        
    // }
    
    addFruit = (e) => {
        this.setState((prevState) => ({cart: [e.target.value, ...prevState.cart]}))
    }

    render() {
        // console.log(this.state.cart)
        return(
            <section>
                <h1>Shopping Cart</h1>
                <button onClick={this.addFruit} value={"orange"}>Orange</button>
                <button onClick={this.addFruit} value={"apple"}>Apple</button>
                {/* <button onClick={() => addFruit("pineeapple")} >Pineapple</button> */}
            </section>
        )
    }
}

export default ShoppingCart; 