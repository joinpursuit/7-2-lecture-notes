import { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        // console.log("constructor")
        this.state = { time: new Date().toLocaleString()}
    }

    tick = () => {
        this.setState({ time: new Date().toLocaleString() });
    }

    componentDidMount(){
        // console.log("componentDidMount")
        this.timer = setInterval(() => {
            this.tick();
            // console.log("TICKED")
        }, 1000)
    }

    componentWillUnmount() { // clean up 
        clearInterval(this.timer)
    }


    // componentDidUpdate(prevProps, prevState) {
    //     // console.log("componentDidUpdate")
    //     // always has a condition to make api call
    // }
    render() {
        // console.log(this.state.time)
        // console.log("render");
        return(
            <div>
                TIME: {this.state.time}
            </div>
        )
    }
}

export default Clock; 


// I want you to create a Dog App. 
// when the page first loads it should go and get a random dog picture. 
// it should display the picture. 
// A user should be able to click a button that update the dog picture to be a new 
// picture. 
// https://dog.ceo/dog-api/