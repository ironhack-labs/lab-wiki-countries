import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import CountryDetail from "./CountryDetail";
import { Route, Link, NavLink } from 'react-router-dom';

import countries from "./countries.json";


class App extends React.Component {

  constructor(){
      super()
      this.state = {
          data: countries
      }
  }
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-5">
            <div className="list-group perso">
            { this.state.data.map((e,i) => 
            <NavLink to={"/"+e.cca3} className="list-group-item list-group-item-action" key={e.cca3}>
            <img src={e.flag} alt="" /> {e.name.common}</NavLink>)
            }
            </div>
          </div>
          <div class="col-7">
          <Route exact path={"/:id"} render={(props)=> <CountryDetail id={props.match.params.id} data={this.state.data}/>}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
