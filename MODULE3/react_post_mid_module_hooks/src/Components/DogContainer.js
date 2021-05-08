import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Dog from "./Dog";

// write a dog container.
// This should fetch 5 pictures and display them based
// on the breed of the dog selected.

// Hint - when does this need to fetch the next set of dog pics.

// use your Dog.js for showing individual dogs.

const DogContainer = ({breed}) => {
  const [imageURLs, setImageURLs] = useState([])
  const didMount = useRef(false);


  useEffect(() => {

  const fetchDogImages = async () => {
    try {
      const res = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/5`
      );
      setImageURLs(res.data.message);
    } catch (error) {
      console.log(error);
      setImageURLs([]);
    }
  };


    if(didMount.current) {
      fetchDogImages()
    } else {
      didMount.current = true; 
    }
  }, [breed])


    return (
      <section>
        <h1>Dog Container</h1>
        {imageURLs.map(image => {
            return <Dog url={image} key={image}/>
        })}
      </section>
    );
  
}

export default DogContainer;
