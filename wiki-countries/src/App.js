import React from 'react'
import { NavLink,Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import countries from './countries.json'


export default class App extends React.Component {
  constructor(){
    super();
    this.state={countries}
  }
  render() {
    const countries=[...this.state.countries]
    return (
      <div>
        <header><h1>WikiCountries</h1></header>
        <div className="row">
          <div className="list-group col-5">
            {countries.map(c=>{
              return (
                <NavLink key={c.cca3} to={"/"+c.cca3} className="list-group-item list-group-item-action ">{c.flag} {c.name.official}</NavLink>
                )
              })
            }
          </div>
          <div className="col-7">
          <Route path="/:id" render={(props)=><CountryDetail id={props.match.params.id} data={countries}/>}  />
          </div>
        </div>
      </div>
    )
  }
}
