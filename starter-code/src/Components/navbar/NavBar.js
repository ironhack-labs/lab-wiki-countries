import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function NavBar(props){
  console.log("props in the nav *************** ", props);
  const printCountries = () =>{
    return props.countries.map((e)=>{
      return <li><Link activeclassname="active" exact to={`/countryInfo/${e.name.common}`}>{e.flag} {e.name.common}</Link></li>
    })
  }
      return (
        <div className="App">
        <ul>
          {printCountries()}
        </ul>
        </div>
      );
    }


export default NavBar;
