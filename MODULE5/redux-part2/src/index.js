import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
// import Provider here from react-redux
// import the store from our store file

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Wrap our App with Provider and pass our store */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
