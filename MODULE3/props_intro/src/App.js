import Person from "./Components/Person";
import Post from "./Components/Post";
import "./App.css";

// when iterating through array of objects and mapping must add a 
// key property. Key properties will be converted to strings and MUST 
// be unique. Usually use the id of the object. By default it will be the index.


const users = [
  {
    id: "jflkaseflwenrlk",
    name: "Sparky",
    age: 26,
  },
  {
    id: "jkldfnasdklnfjjj",
    name: "Peter",
    age: 50,
  },
];

// map is an array method that calls the callback on each element
// returns a new array with each element having been acted
// on by the callback.

const posts = [
  { title: "Why I Eat Pork", body: "Because I'm wild" },
  { title: "Why I Don't Eat Pork", body: "Because its not chicken" },
  { title: "Why I Drink Coffee", body: "For the cream" },
];

function App() {
  const people = users.map((user) => {
    return <Person name={user.name} age={user.age} key={user.id} />;
  });

  return (
    <div className="App">
      {/* <Post title={post.title} body={post.body} /> */}

      {people}

      {posts.map(post => {
        return <Post title={post.title} body={post.body} key={post.title}/>
      })}

      {/* {users.map((user) => {
        return <Person name={user.name} age={user.age} />;
      })} */}
    </div>
  );
}

export default App;
// Challenge build a Post component that displays a title and body.
// Pass title and body in as a props

//Challenge - build out multiple posts and map through them.
