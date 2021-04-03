import ContactList from "./components/ContactList";
import Feed from "./components/Feed";
import "./App.css"; //<link href="./App.css"/>

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: "Alex",
  lastName: "Perez",
};

const element = <h1> Hello, {formatName(user)} </h1>;

function App() {
  return (
    <div className="App">
      {element}
      <div className="flexContainer">
        <ContactList />
        <Feed />
      </div>
      <div>
        <p>INformation</p>
      </div>
    </div>
  );
}

export default App;
