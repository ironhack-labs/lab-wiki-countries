import React from "react";
import "./App.css";
import myData from "./countries.json";
import { Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

// const changeActive = props => {
//   console.log(props.cca3);
//   // document.querySelectorAll(".list-group-item").
// };

const Countries = () => {
  return myData.map(el => {
    return (
      <div key={el.cca3} class="list-group-item list-group-item-action">
        <NavLink to={`/countries/${el.cca3}`} activeClassName="active">
          {el.flag} {el.name.common}
        </NavLink>
      </div>
    );
  });
};

function App() {
  return (
    <div>
      <nav>
        <div>Wikicountries</div>
      </nav>
      <div class="row">
        <div>{Countries()}</div>
        <div class="col-7">
          <Route exact path="/countries/:cca" component={CountryDetail}></Route>
        </div>
      </div>
    </div>
  );
}
export default App;
