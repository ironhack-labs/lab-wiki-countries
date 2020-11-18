import React, { useState, useEffect } from 'react';
import countriesSrc from '../countries.json';
import CountryLink from './CountryLink';


function CountryDetails(props){

 const [state, setState] = useState({
   official : '',
   capital: '',
   area: '',
   borders: [],
 });


useEffect(() => {
  countriesSrc.forEach((country) => {
    if (country.cca3 === props.match.params.cca3) {
      
    setState({
      official: country.name.common,
      capital: country.capital,
      area: country.area,
      borders: country.borders,
    });
    }
  });
}, [props]);


return (
  <div>
    <h2>{state.official}</h2>
    <p>Capital: {state.capital}</p>
    <p>Área: {state.area}</p>
    <p>
      Borders:</p>
      <ul>
        {state.borders.map((el) => {
          return <CountryLink state={[0,setState]} key={el}>{el}</CountryLink>;
        })}
      </ul>
  </div>
);


}

export default CountryDetails;