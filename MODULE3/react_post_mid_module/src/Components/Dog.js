import { Component } from 'react'

const styles = {
    img: {
        height: "200px",
        width: "200px"
    }
}

class Dog extends Component {
    constructor(props) {
        super(props)
        console.log("DOG Constructor")
    }

    componentDidMount() {
        debugger
    }

    componentWillUnmount() {
        debugger
    }
    componentDidUpdate(prevProps) {
        debugger
    }
    render() {
        debugger
        const { url } = this.props; 
        return <img src={url} alt="Dog Pic" style={styles.img}/>
    }
}


export default Dog; 