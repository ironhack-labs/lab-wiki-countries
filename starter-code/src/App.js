import React from "react";
import CountryList from "./components/CountryList/CountryList";
import CountryDetail from "./components/CountryDetail/CountryDetail";

import HomeView from "./components/HomeView/HomeView";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Countries from "./countries.json";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p>Wiki Countries</p>

        <Link to="/">Home</Link>
        <Link to="/CountryList">Countries</Link>
      </header>

      <Switch>
        <Route exact path="/CountryList" component={CountryList} />
        <Route exact path="/" component={HomeView} />
        <Route path="/:id" component={CountryDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
