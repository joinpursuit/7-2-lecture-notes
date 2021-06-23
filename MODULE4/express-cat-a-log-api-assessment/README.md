[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Module Four Practice Mid-Assessment

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `touch .env` add
- `PORT=3555` to `.env` file
- `nodemon` to start the express app
- `npm test` in order to test app
- install necessary npm packages in order to build an express app

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

You will be building a single model full C.R.U.D express app for cats and their artistic abilities

### MVC

Your app should follow the file and folder organization in class

- `models` folder - with the appropriate file/code functionality
- `controllers` folder - with the appropriate file/code functionality

e.g. - where does the mock database/data go? Where do the routes specific to the cats go?

### RESTful Routes

Your app should use the 5 RESTful routes covered in class, as well as a catch-all route.

|  #  | Action  |    URL    | HTTP Verb |    CRUD    |              Description              |
| :-: | :-----: | :-------: | :-------: | :--------: | :-----------------------------------: |
|  1  |  Index  |   /cats   |    GET    |  **R**ead  |   Get a list (or index) of all cats   |
|  2  |  Show   | /cats/:id |    GET    |  **R**ead  | Get an individual view (show one cat) |
|  3  | Create  |   /cats   |   POST    | **C**reate |           Create a new cat            |
|  4  | Destroy | /cats/:id |  DELETE   | **D**elete |             Delete a cat              |
|  5  | Update  | /cats/:id |    PUT    | **U**pdate |             Update a cat              |
|  6  |         | /404      |    GET    |            |             Our catch-all route       |

### Example Model Cat:

```js
{
  designer: "Mocha",
  age: 8,
  lovesCatnip: true,
  latestPiece: "Distressed Arm Chair",
  price: 3,
}
```
### Example Response:

```js
{
  success: true,
  payload: {
    designer: "Mocha",
    age: 8,
    lovesCatnip: true,
    latestPiece: "Distressed Arm Chair",
    price: 3,
  }
}
```

### Use Postman

While you can test `index` and `show` in the browser, use Postman to test `create`, `destroy`, `update`

### Use Unit Testing

- run `npm test` to make sure all the tests pass

Remember to install your packages correctly so that we will be able to run / compile your app by running nodemon.

Your app should also have a **clean** console, with useful logs for things like error/success handling:

```
[INFO] Success status code ${req.status.code} for request to ${req.url}
```

And logs that are troubleshooting/debugging should be removed ones like

```js
console.log("hiiiiiii?");

console.log("here");

console.log("asdf", req.body);

console.log("does thsi workd!!!?");
```

Should be removed before submission

## Bonuses

- add a `/cats/search` route that will let you use a query string to search by `designer` to see their art
- Try connecting a React front-end and having the `index` route show
