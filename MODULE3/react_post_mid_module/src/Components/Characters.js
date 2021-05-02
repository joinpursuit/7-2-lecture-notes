import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Characters extends Component {
  state = { characters: [] };

  async componentDidMount() {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      this.setState({ characters: res.data.results });
    } catch (err) {
      console.log(err);
      this.setState({ characters: [] });
    }
  }

  render() {
    const { characters } = this.state;
    return (
      <section>
        <h1>Rick & Morty Characters</h1>
        <ul>
          {characters.map((character) => {
            return (
              <li key={character.id}>
                <Link to={`/characters/${character.id}`}>{character.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Characters;
