import {Component} from 'react'
// in react world we are always extending component 
const person = {
  name: "Sparky",
  age: 26,
};

class PersonClass extends Component {
    constructor(props) {
        super(props)
    }

    render() { // render is a lifecycle method and only method required for a class
        return (
           <div>
               <p>Name: {person.name}</p>
               <p>Age: {person.age}</p>
           </div>
       )
    }
}

export default PersonClass;