import { useState, useEffect} from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleString())    

    const tick = () => {
        setTime(new Date().toLocaleString());
    }
    
    useEffect(() => {
        const timer = setInterval(tick, 1000)
        return () => clearInterval(timer)
    }, [])

    return(
        <div>
            TIME: {time}
        </div>
    )
}

export default Clock; 


// I want you to create a Dog App. 
// when the page first loads it should go and get a random dog picture. 
// it should display the picture. 
// A user should be able to click a button that update the dog picture to be a new 
// picture. 
// https://dog.ceo/dog-api/