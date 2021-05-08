import { useState } from "react";
import DogContainer from "./DogContainer";
import DogSelector from "./DogSelector";

const DogAppTwo = () => {
  const [breed, setBreed] = useState("");

  const updateBreed = (e) => setBreed(e.target.value);

  return (
    <div>
      <DogSelector breed={breed} updateBreed={updateBreed} />
      <DogContainer breed={breed} />
    </div>
  );
};

export default DogAppTwo;
