import React from "react";
import "./App.css";
import Home from "./components/Home";
// import About from "./About";
import Navbar from "./components/Navbar";
import Countries from "./components/CountriesList";
import Country from "./components/CountryDetails";
// import { Projects } from "./Projects";
import { Route, Switch } from 'react-router-dom';

function NotFound() {
  return <h3>Not Found 🤷‍♀️ 🤷‍♂️</h3>
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countries/:id" component={Country} />
        <Route exact path="/countries" component={Countries} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;