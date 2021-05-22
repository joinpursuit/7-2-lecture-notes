import React from 'react'
import { useParams } from 'react-router-dom';
const Person = () => {
    const { name } = useParams(); 
    return(
        <section>
            <h1>Person {name}!</h1>
        </section>
    )
}

export default Person; 