import React from "react";
import { Link } from 'react-router-dom';
import countriesSrc from '../countries.json';


function CountryLink(props){

console.log(props);

const [state,setState] = props.state;

function handleClick(event){
  setState(country)
}

let active = false;

const country = countriesSrc.find((el)=>{ return el.cca3 === props.children});

if(country.cca3 === state.cca3){
  active = true;
}

    return (
      <li className={active ? `list-group-item active` : `list-group-item`}>
        <Link
          onClick={handleClick}
          code={country.cca3}
          to={`/country/${country.cca3}`}
        >{`${country.flag}  ${country.name.common}`}</Link>
      </li>
    );

}

export default CountryLink;