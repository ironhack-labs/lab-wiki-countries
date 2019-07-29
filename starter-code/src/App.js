import React,  { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "./countries";
import { Link, Route, Switch } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import { Navbar, NavbarBrand,Input,InputGroup,InputGroupAddon } from "reactstrap";
import {FaSearch} from 'react-icons/fa'

function App() {
  const [search, setSearch] = useState(""); 
  
  function searchHandle (e) {
    setSearch(e.target.value);
  }
  
  return (
    <div className="App">
      <Navbar color="secondary" dark className="countries-navbar">
        <NavbarBrand  href="/">WikiCountries</NavbarBrand>
      </Navbar>
      <br/>
    

      <div className="wiki-body">
        <div className="row">
          <div className="col-5">

          <InputGroup>
          <InputGroupAddon addonType="prepend">🔍</InputGroupAddon>
            <Input placeholder="Country Name" type="search"  value={search} onChange={searchHandle} />
          </InputGroup>
          <br/>

            {countries
            .filter(country => (country.name.common.toLowerCase().includes(search.toLowerCase())))
            .map((country, i) => (
              <Link
                key={i}
                to={"/country-detail/" + country.cca3}
                className="list-group-item list-group-item-action"
              >
                {country.flag} {country.name.common}
              </Link>
            ))}
          </div>
          <div className="col-7">
          <Switch>
            <Route
              exact
              path="/country-detail/:cca3"
              component={CountryDetail}
            />
          </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
