import React from "react";
import "./Person.css";

// props looks like {person: {}}
// const Person = ({ name, age }) => {



const Person = (props) => {
  // props is short for properties
  // only "weird" thing about props is it's always an object
  const { name, age } = props; // object destructuring

// debugger
  return (
    <div className="PersonContainer">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Person;
