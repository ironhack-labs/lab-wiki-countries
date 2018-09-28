// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import allCountries from '../countries.json';

const Main = () => {
  return (


      <div className="main list-group col-5">
        {allCountries.map((oneCountry, index) => {
          return (
          <div className="myList ml-1" key={index}>
              <h3>
              <Link className="list-group-item list-group-item-action" to={`/countries/${oneCountry.name.common}`}>
              {oneCountry.flag} {oneCountry.name.common}
              </Link> 
              </h3>
          </div>
          )
              })}
      </div>



  )
}

export default Main;


/* <Link className="list-group-item list-group-item-action" to={`/ourprojects/${oneCountry.name.common}`}>
{oneCountry.name.common}
</Link> */