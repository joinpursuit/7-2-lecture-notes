import Counter from './Components/Counter';
import Color from './Components/Color'
import './App.css';

function App() {
  return (
    <div className="App">
     <Counter />
     <Color />
     {/* <Counter someKeyInProps={someValueForKey}/> */}
    </div>
  );
}

export default App;
