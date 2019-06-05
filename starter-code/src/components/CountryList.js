import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = (props) => {
 
  return(
    <div className="list-group">
      {
        props.data.map((eachCountry, index) => {
          return <Link to={`/${eachCountry.cca3}`} key={index} className="list-group-item list-group-item-action"><i className="flag">{eachCountry.flag}</i> {eachCountry.name.common}</Link>
        })
      }
    </div>
  )
}

export default CountryList;
 /*
 esto por qué no?
           return <Link to={`/projects/${eachCountry.cca2}`} key={index}><CountryDetail dataDetail={eachCountry}/></Link>

           */
          /* me peta el ordenador cuando hago esto*/