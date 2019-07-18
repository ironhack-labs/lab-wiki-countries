import React, { Component } from "react";
import "./App.css";
import countries from './countries'

import { Table } from 'reactstrap';
import Navbar from "./Navbar"
import { Route, Switch, Link } from "react-router-dom"
import CountryDetail from "./CountryDetail"

function App() {
  return (
    <div className="App">
      <Navbar/>

        <Route path="/country-detail/:cca3" exact component = {CountryDetail}  />

      <Table className="table-center float-right" style={{width:"1000px", dispaly:"flex"}}>
        <thead>
          <tr>
            <th>Countries</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, i) => (
            <tr key={i}>
              <td>{country.flag}{country.name.common}</td>
              
              <td>
                <Link to={"/country-detail/" + country.cca3}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
