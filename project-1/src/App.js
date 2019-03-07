import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Beer from "./components/Beer";

const API_KEY = "f7c2c4fdaa88cb83fcc4d308c439339f";

class App extends Component {
  state = {
    beers: []
  };
  getBeer = async e => {
    const beerName = e.target.elements.beerName.value;
    e.preventDefault();
    const API_CALL = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search?q=` +
        beerName +
        `&type=beer&
      key=${API_KEY}`
    );
    const data = await API_CALL.json();
    this.setState({ beers: data.data });

    console.log(this.state.beers);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beer Me!</h1>
        </header>
        <Form getBeer={this.getBeer} />
        <Beer beers={this.state.beers} />
      </div>
    );
  }
}

export default App;
