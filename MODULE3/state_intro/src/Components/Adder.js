import React from 'react'

class Adder extends React.Component {
    state = {input: "", sum: 0}

    handleChange = (e) => {
        this.setState({input: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            const { input, sum} = prevState; 
            return {
                sum: sum + Number(input),
                input: ""
            }
        })
        // this.setState({sum: sum + input})
    }

    render() {
        const { input, sum} = this.state; 
        return(

            
        <div>
            Sum is: {sum}
            <form onSubmit={this.handleSubmit}>
                <label>
                Current Number: 
                <input onChange={this.handleChange} value={input} type="number"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    }
}

export default Adder; 


// Challenge Build a Todo application. 
// Todos should live in the state of app. 
// Each Todo should be an object with the properties, id, text, and completed. 
// Have a component that displays them. 
// Build a Form that allows you to enter a todo. 
// Each todo should have a delete button. Clicking on this button will delete the todo. 
// Add a strike through. Clicking on the text of the todo will strike a line through it. This behavior can be toggled by clicking. 

// Build an autocomplete. The component will receive an array of names as props. 
// It should have an input and as someone types,
//  if that string is a prefix of the name,
//  a list of matching names appears as a list. 
// If a name is clicked, that name fills the input. 

// Create a Tabs component. 
// It should take in an array of objects.
//  Each object has a header and content.
//   When the header is selected the content should appear on the screen. 
//   The select header should appear bold 