import React, { Component } from "react";
import logo from "./donut.png";
import "./App.css";

class App extends Component {

  state = {
    loading: false,
    donuts: [],
    error: ''
  }

  // FETCH_DONUTS_REQUEST loading:true
  // FETCH_DONUTS_SUCCESS loading:false, donuts to data
  // FETCH_DONUTS_ERROR loading:false, error to message

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Donut Shop</h1>
          <img className="App-logo" src={logo} alt="logo"/>
        </header>
      </div>
    );
  }
}

export default App;
