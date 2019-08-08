import React, { Component } from "react";
//Önce doğrudan Series componentini kullanıyorduk.
//Sonra Main'i ekledik. Burdan geçiş yapacağız.
//import Series from "../Containers/Series";
import Main from "../Main";
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Main />
      </div>
    );
  }
}

export default App;
