import {Component} from 'react'
// in react world we are always extending component 
const person = {
  name: "Sparky",
  age: 26,
};

// What's the pont of classes in React? 
// 1st - classes have access to lifecycle methods 
// 2nd - classes can hold state (data)
// 3rd (only one that's still relevant) - error boundries 

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