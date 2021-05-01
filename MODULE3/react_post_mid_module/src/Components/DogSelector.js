// I want you to use the dog api. To grab all the breeds. 
// put all the breeds in a select box. (controlled component).

import { Component } from "react";
import axios from 'axios';

class DogSelector extends Component {
    state = { breeds: []}

    loadBreeds = async () => {
        try {
            const res = await axios.get("https://dog.ceo/api/breeds/list/all");
            const breedArray = Object.keys(res.data.message);
            this.setState({breeds: breedArray})
        } catch (err) {
            this.setState({breeds: []});
        }
    }

    componentDidMount() {
        this.loadBreeds();
    }



    render() {
        const { breeds } = this.state; 
        const { breed } = this.props; 
        const breedOptions = breeds.map(breed => <option value={breed} key={breed}>{breed}</option>)
        
        return(
            <select value={breed} onChange={this.props.updateBreed}>
            <option value="" disabled selected>Select Breed!</option>
                {breedOptions}
            </select>
        )
    }
}

export default DogSelector;