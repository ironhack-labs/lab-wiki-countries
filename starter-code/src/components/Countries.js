import React from "react";
import data from '../countries';
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Li = styled.li`
  list-style:none;
`;

const Ul = styled.ul`
  padding: 0;
`;

export const Countries = ({match }) => {

let {cca3} = match.params;

let country;
data.forEach(e=>{
  if(e.cca3==cca3){
    country=e
  }
});


// console.log(country.borders)

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p><b>Capital: </b> {country.capital} </p>
      <p><b>Area: </b> {country.area} km<sup>2</sup></p>
      <p><b>Borders: </b> </p>

        <Ul>
          {country.borders.map(function(b){
            return <Li 
            key={b}
            >
            <NavLink to={"/" + b}>{b}</NavLink>
            </Li>
            }
          )}
        </Ul>

    </div>
  )
}