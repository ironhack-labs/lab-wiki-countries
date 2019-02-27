import React, { Component } from "react";
// import projects from './CountryDetail';
import { projects } from "./components/CountryDetail";
import NavBar from "./components/NavBar";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App ">
        <NavBar />
        <div className='wrapper'>
        <div className='sidebar'>
        <Switch>
          <Route exact path="/projects" component={projects} />
        </Switch>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
