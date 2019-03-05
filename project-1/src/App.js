import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

const API_KEY = "f7c2c4fdaa88cb83fcc4d308c439339f";

class App extends Component {
  getBeer = async e => {
    const beerName = e.target.elements.beerName.value;
    e.preventDefault();
    const API_CALL = await fetch(
      `https://sandbox-api.brewerydb.com/v2/?key=${API_KEY}`
    );
    const data = await API_CALL.json();
    console.log(data);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beer Me!</h1>
        </header>
        <Form getBeer={this.getBeer} />
      </div>
    );
  }
}

export default App;
