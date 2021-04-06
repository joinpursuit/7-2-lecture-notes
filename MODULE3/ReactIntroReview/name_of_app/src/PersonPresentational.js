const person = {
    name: "Peter", 
    age: 50
}

const PersonPresentational = (props) => {
    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
        </div>
    )
}

export default PersonPresentational;