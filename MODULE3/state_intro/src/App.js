import Counter from './Components/Counter';
import Color from './Components/Color'
import Person from './Components/Person';
import ToggleText from './Components/ToggleText';
import './App.css';
import ShoppingCart from './Components/ShoppingCart';
import Adder from './Components/Adder';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
     {/* <Counter />
     <Color animal={"cat"} building={"house"} name={"AnJu"}/>
     <Person name={"Peter"} />
     <ShoppingCart />
     <ToggleText />
     <Adder /> */}
     {/* <Counter someKeyInProps={someValueForKey}/> */}
     <Form />
    </div>
  );
}

export default App;

