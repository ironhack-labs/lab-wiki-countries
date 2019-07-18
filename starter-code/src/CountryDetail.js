import React from 'react'
import countries from "./countries"
import { Table } from 'reactstrap';
import { Route, Switch, Link } from "react-router-dom"
import reactstrap from 'reactstrap';

export default function CountryDetail(props) {
  const code = props.match.params.cca3;
  const country = countries.find(c => c.cca3 === code)

  return (
    <div className="float-right" style={{position:"fixed"}}>
        
        <h2 className="float-right">{country.name.common}</h2>
        <h4 >Capital: {country.capital}</h4>
        <h4 >Area: {country.borders}</h4>
      
      
    </div>
  )
}





