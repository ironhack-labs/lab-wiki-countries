import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import CountryDetail from "./Components/CountryDetail";
import countries from "./countries.json";

function App() {
  return (
    <div>
      <div>
      <h1>Wiki Countries</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight:" 90vh", overflow: "scroll"}}>
            <div className="list-group">
              {countries.map(data => {
                return (
                  <Link
                    className="list-group-item list-group-item-action active"
                    to={`/${data.cca3}`}
                  >
                    {data.flag} {data.name.official}}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-5">
          <Route exact path="/:id" component={CountryDetail} />
            </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
