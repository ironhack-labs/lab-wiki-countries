import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import "bootstrap/dist/css/bootstrap.css";

const NotFound = () => {
  return <div>404 not found</div>;
};

function App() {
  return (
    <div className="App m-5">
      <div className="app-list row">
     
        <CountryList />
      
     
      <div className="info">
        <Switch>
          <Route exact path="/country-detail/:id" component={CountryDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </div>
    </div>
  );
}

export default App;
