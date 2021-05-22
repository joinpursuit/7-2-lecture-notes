import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

const CharacterDisplay = (props) => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchCharacter();
  }, [id]);

  const fetchCharacter = async () => {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacter(res.data);
    } catch (err) {
      console.log(err);
      setCharacter({});
    }
  };

  const goBack = () => {
    history.goBack();
  };

  const goToUser2 = () => {
      history.push("/characters/2")
  }

  const seeDogs = () => {
    history.push("/dogs");
  };

  const { name, image } = character;
  return (
    <section>
      {props.myName}
      <button onClick={goBack}>Back Button</button>
      <button onClick={seeDogs}>See dogs</button>
      <button onClick={goToUser2}>See User 2</button>
      <h1>Display Single Character</h1>
      Name: {name}
      <img src={image} alt="character pic" />
    </section>
  );
};

export default CharacterDisplay;
