import React, { Component } from "react";
import "./style.css";
//import Routes from './Routes';
import countries from "./countries.json";
import Country from "./components/countries";

class App extends Component {
  state = {
    paises: countries
  };
  render() {

    return (
      <div className="App">
        <h1>Paises</h1>
        {this.state.paises.map(pais => {
          return <Country pais={pais} />
        })}
        <table />
      </div>
    );
  }
}
// export default withRouter(App);
export default App;
