import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, Link } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail";
import data from "./countries.json"

export const App = () => {
  return (
    <Switch>
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                  {data.map((e,i)=> <Link to={{pathname:`/${e.cca2}`, 'data':data, 'index': i}} className={`list-group-item list-group-item-action`} data={data} key={i}>{e.flag} {e.name.common}</Link>)}
                </div>
              </div>
              <Route path="/:country" render={(data) => <CountryDetail data={{...data}} />}/>
            </div>
          </div>
        </div>
      </div>
    </Switch>
    )
  }


