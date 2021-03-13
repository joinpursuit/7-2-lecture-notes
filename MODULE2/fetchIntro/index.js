// Know and understand promises and promise chaining.
// Handle errors with checks in fetch and catch.
// make requests with fetch  -->

// <!-- States of promise  -->
// <!-- Pending - waiting for a response to happen -->
// <!-- Fulfill - I have kept my word  -->
//  Rejected - failed to keep promise

// settled - promise has been rejected or fulfilled

// .then always returns a promise ! The argument that
// gets passed into the callback is what the previous
// promise returned

// .then takes in two optional arguments.
// first arg => success callback.
// second arg => failure callback.

// we use then for chaining successful promises
// we use catch for catching errors

// const promise = new Promise((resolve, reject) => {
//     if(false) {
//         resolve("Stuff worked!")
//     } else {
//         reject(Error("It's been rejected!"))
//     }
// })

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//fetch always gives back a response object first!

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => {
//         // first response is my Response object
//         // console.log(response)
//         return response.json();
//     }).then(res => {
//         // the res with the JSON we want!
//         // console.log(res)
//         const body = document.body;
//         const img = document.createElement("img");
//         img.src = res.message;
//         body.appendChild(img);
//     })

// Negative with fetch is that 4xx and 5xx level errors
// still resolve as fulfilled

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#dog-input");
  fetch(`https://dog.ceo/api/breed/${input.value}/images/random/3`)
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong, status " + res.status);
      }
      return res.json();
    })
    .then((res) => {
      const body = document.body; 
      res.message.forEach((dog) => {
        const img = document.createElement("img");
        img.src = dog;
        body.appendChild(img)
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create an select bar with numbers 1 - 50 (don't hand write these)
// The user should select one of the numbers and see that many 
// random dogs
const select = document.querySelector("select");

const createOptions = (num) => {
    for(let i = 1; i <= num; i++) {
        const option = document.createElement("option");
        option.textContent = i + " number of dogs";
        option.value = i; 
        select.appendChild(option)
    }
}
createOptions(25);

select.addEventListener("change", (e) => {
    const numOfDogs = Number(e.target.value);
    fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
        .then(res => {
           if(!res.ok) {
               throw Error("Something went wrong")
           }
           return res.json();
        }).then(res => {
            const dogPics = document.querySelector("#dog-pics");
            dogPics.innerHTML = "";
            res.message.forEach(dogURL => {
                const img = document.createElement("img");
                img.src = dogURL;
                dogPics.appendChild(img);
            })
        }).catch(err => {
            console.log(err);
        })
})