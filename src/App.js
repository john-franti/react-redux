import React, { Component } from "react";
import logo from "./donut.png";
import "./App.css";
import DonutContainer from "./components/DonutContainer";
import DonutBrowser from "./components/DonutBrowser";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to the Donut Shop</h1>
            <img className="App-logo" src={logo} alt="logo" />
            <DonutContainer />
            <DonutBrowser />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
