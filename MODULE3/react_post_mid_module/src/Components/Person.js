import React from 'react'

const Person = (props) => {
    const { name } = props.match.params; 
    return(
        <section>
            <h1>Person {name}!</h1>
        </section>
    )
}

export default Person; 