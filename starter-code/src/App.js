import React, { Component } from "react";

import "./App.css";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <h4 class="list-group-item list-group-item-action active">
            Wikicountries
          </h4>
          <div class="row">
            <CountryList />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
