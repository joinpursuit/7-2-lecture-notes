import { Component } from "react";
import axios from 'axios';

class CharacterDisplay extends Component {
    state = {character: {}}

    componentDidMount() {
        this.fetchCharacter();
    }

    fetchCharacter = async () => {
        try {
            const { id } = this.props.match.params;
            const res = await axios.get(
              `https://rickandmortyapi.com/api/character/${id}`
            );
            this.setState({character: res.data})
        } catch (err) {
            console.log(err);
            this.setState({character: {}})

        }
    }

    goBack = () => {
        this.props.history.goBack();
    }

    seeDogs = () => {
        this.props.history.push("/dogs")
    }

    render() {
        const { character } = this.state; 
        const { name, image} = character; 
        return(
            <section>
                <button onClick={this.goBack}>Back Button</button>
                <button onClick={this.seeDogs}>See dogs</button>
                <h1>Display Single Character</h1>
                Name: { name }
                <img src={image} alt="character pic" />
            </section>
        )
    }
}

export default CharacterDisplay;