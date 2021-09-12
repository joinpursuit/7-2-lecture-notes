import { useDispatch, useSelector } from "react-redux";
// ^^ useDispatch hook acts just like the .dispatch we called on our store previously
// add useSelector to our imports here ^^
import darkRoom from "../assets/darkRoom.jpg";
import litRoom from "../assets/litRoom.jpg";
// import our light action from "../actions/lightActions";
import {lights} from "../actions/lightActions"
import "./Room.css";

const Room = () => {
  // set a variable equal to the value of useDispatch invoked 
  // so we may use it to dispatch our actions
  const dispatch = useDispatch();
  // set another variable using useSelector that will represent the slice of state we are concerned with
  // useSelector takes in a callback that accepts state as its arguement and returns the 
  // slice of state we want to be able to read
  const lightState = useSelector((state) => state.lights);


  return (
    <div className="Room">
      {/* We want to be able to conditionally change this image source based on our state */}
      <img src={lightState ? litRoom : darkRoom} alt="A dark living room" />
      {/* When we click our button we want to dispatch the action that "flips our light switch" */}
      <button
        onClick={() => {dispatch(lights())}}
      ></button>
    </div>
  );
};

export default Room;
