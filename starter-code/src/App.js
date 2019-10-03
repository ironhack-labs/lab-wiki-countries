import React from "react";
import "./App.css";
import myData from "./countries.json";
import { Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

const App = () => {
    let showAllCountries = () => {
          let allCountries = myData.map(el => {
            return (
              <div key={el.cca3} className="list-group-item list-group-item-action">
                <NavLink to={`/${el.cca3}`} activeClassName="active">
                  {el.flag} {el.name.common}
                </NavLink>
              </div>
            );
          });
          return allCountries;
    }
  return(

<div>
    <nav>
     <div className="title">Wikicountries</div>
    </nav>
<div className="row">
  <div>{showAllCountries()}</div>
  <div className="col-7">
    <Route exact path="/:cca" component={CountryDetail}></Route>
  </div>
</div>
</div>
  )
};

export default App;