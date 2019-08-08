import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

/*
const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
}
*/

/*
const getCurrentDate = function() {
  const date = new Date();
  return date.toDateString();
}

//const greeting = React.createElement('h1',{}, 'Hello World');
const greeting = <h1>Hello World : {getCurrentDate()} </h1>;
*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
