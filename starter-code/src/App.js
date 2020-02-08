import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import countriesImport from "../src/countries.json";
import Countries from "./comps/Countries";
// import CountryDetails from "./comps/CountryDetail"

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countriesImport
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {this.state.countries.map(country => (<Countries name={country.name.common}/>))}
                
                {/* <Route exact path="/countries" component={CountryDetails} /> */}
              </div>
            </div>
            <div className="col-7"> Something 2 </div>
          </div>

          {/* <!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons --> */}
          {/* <div className="list-group">
        
          <a href="#" className="list-group-item list-group-item-action active">
            Cras justo odio (active)
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Dapibus ac facilisis in
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Morbi leo risus
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action disabled"
          >
            Vestibulum at eros
          </a>
        </div> */}
        </div>
      </div>
    );
  }
}

export default App;
