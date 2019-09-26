import React from "react";
import countries from "./countries";
import "bootstrap/dist/css/bootstrap.min.css";
import CountryView from "./components/Country";
import CountryDetail from "./components/CountryDetail";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CountryView} />
          {/* <Route path="/country" component={CountryDetail} /> */}
          <Route path="/country/:code" component={CountryDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
