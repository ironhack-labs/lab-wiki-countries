import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import Navbar from './NavBar'
import Home from "./Home";
// import About from './About'
// import Contact from './Contact'
import CountryDetail from "./CountryDetail";
import "bootstrap/dist/css/bootstrap.css";
import countries from "./countries.json";

class App extends Component {
  state = {};

  componentDidMount() {
    //window.onload happens once when the components first mounts
    console.log(this); //Get your data from an API or where you'll get data from your server DB.
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="top">
            <Switch>
              {/* <Navbar />  This will always show because it not in the switch statement  */}
              <h1>Welcome to WikiCountries</h1>
              {/* <Route exact path='/about' component={(props) =>    <About {...props} /> }></Route>
              <Route exact path='/contact' component={(props) =>  <Contact {...props} /> }></Route> */}
            </Switch>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                <a className="list-group-item list-group-item-action" href=" ">
                  <Home />
                </a>
              </div>
            </div>
            <div className="col-7">
              <div className="list-group">
                {/* <a className="list-group-item list-group-item-action" href=" "> */}
                <Route
                  exact
                  path="/country/:id"
                  component={(props) => (
                    <CountryDetail {...props} countries={countries} />
                  )}
                ></Route>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
