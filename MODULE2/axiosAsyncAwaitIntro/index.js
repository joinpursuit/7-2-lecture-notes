// Learn axios and it's advantages over fetch (another way to make HTTP requests)
// async and await (to return promises and wait for async code)
// try ... catch (instead of promise chaining)

// await can ONLY be used inside of functions with async

// console.log(axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
//     console.log("GOODBYE")
// }));
// console.log("HELLO DURDONA")

const getRandomDog = async () => {
  const body = document.body;
  try {
    const res = await axios.get("https://dog.ceo/api/breeds/image/rndom");
    const img = document.createElement("img");
    img.src = res.data.message;
    body.appendChild(img);
  } catch (err) {
    const p = document.createElement("p");
    p.textContent = "There was an error, please refresh and try again";
    body.appendChild(p);
    console.log(err);
  }
};

// getRandomDog()

// axios throw errors  at 4xx and 5xx level

// async allows code to run in a more synchronous fashion

// Example of Post request
// const fetchData = {
//   method: "POST",
//   body: { name: "Corey" },
//   headers: new Headers()
// };

// axios.post("https://jsonplaceholder.typicode.com/posts", {name: "corey"})
//  .then(res => {
//         debugger
//     })
//     .catch(err => console.log(err))

// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const input = document.querySelector("#dog-input");
//   fetch(`https://dog.ceo/api/breed/${input.value}/images/random/3`)
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("Something went wrong, status " + res.status);
//       }
//       return res.json();
//     })
//     .then((res) => {
//       const body = document.body;
//       res.message.forEach((dog) => {
//         const img = document.createElement("img");
//         img.src = dog;
//         body.appendChild(img);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// Create an select bar with numbers 1 - 50 (don't hand write these)
// The user should select one of the numbers and see that many
// random dogs
const select = document.querySelector("select");

const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i + " number of dogs";
    option.value = i;
    select.appendChild(option);
  }
};
createOptions(25);

const getAllDogs = async (e) => {
  const numOfDogs = Number(e.target.value);
  try {
    const res = await axios.get(
      `https://dog.ceo/api/breeds/image/random/${numOfDogs}`
    );
    const dogPics = document.querySelector("#dog-pics");
    dogPics.innerHTML = "";
    res.data.message.forEach((dogURL) => {
      const img = document.createElement("img");
      img.src = dogURL;
      dogPics.appendChild(img);
    });
  } catch (err) {
    console.log(err);
  }
}

select.addEventListener("change", getAllDogs);

// pending, fulfilled, rejected
// settled

// keyword async (we can put in front of functions - functions will return a promise)

// async function greeting() { ES5
//     return "Hello There!"
// }

// const greeting = async () => "Hello There!"
// // console.log(greeting()) // logs a promise
// greeting().then(res => {
//     console.log(res) // logs response from the fulfilled promise
// })

//for other http requests other than GET, we can pass in an
// optional object to fetch as a second argument

const getLuckyCar = async () => {
  try {
    const res1 = await axios.get("http://localhost:3000/users/1/cars");
    const numberOfCars = res1.data.cars.length;
    const res2 = await axios.get("http://localhost:3000/users/2/cars");
    const totalCars = res2.data.cars.length + numberOfCars;
    const res3 = await axios.get(`http://localhost:3000/cars/${totalCars}`);
    console.log(res3.data.car); // shows in console the goal car
  } catch (error) {
    console.log(error);
  }
};
// getLuckyCar();
// const userForm = document.querySelector("#user-form");
// userForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const input = document.querySelector("#username");
//   const formData = new FormData();
//   formData.append("username", input.value);
//   const fetchData = {
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     method: "POST",
//     body: "username=" + input.value,
//   };
//   fetch("http://localhost:3000/users", fetchData)
//     .then((res) => {
//       if (!res.ok) throw Error("Error");
//       return res.json();
//     })
//     .then((res) => {
//       debugger;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// const button = document.querySelector("#show-users");
// const allUsers = document.querySelector("#all-users");

// button.addEventListener("click", () => {
//   fetch("http://localhost:3000/users")
//     .then((res) => {
//       if (!res.ok) throw Error("NOT OK");
//       return res.json();
//     })
//     .then((res) => {
//       allUsers.innerHTML = "";
//       res.users.forEach((user) => {
//         const li = document.createElement("li");
//         li.value = user.id;
//         li.textContent = user.username;
//         allUsers.appendChild(li);
//       });
//     });
// });

// allUsers.addEventListener("click", (e) => {
//   const li = e.target;
//   li.parentNode.removeChild(li);
//   fetch(`http://localhost:3000/users/${li.value}`, { method: "DELETE" })
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("NOT OKAY");
//       }
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
