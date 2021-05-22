import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(res.data.results);
      } catch (err) {
        console.log(err);
        setCharacters([]);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <section>
      <h1>Rick & Morty Characters!</h1>
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
};

export default Characters;
