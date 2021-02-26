import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function CountryDetails(props) {
  const [countryState, setCountryState] = useState({borders:[]});
  const { country } = useParams();

  useEffect(() => {
    const getCountry = async (coun) => {
      const resServer = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${coun}`
      );
      setCountryState(resServer.data);
    };

    getCountry(country);
  }, [country]);

  console.log(countryState);
  return(
    <div>
      {countryState.name}
      {countryState.area}
      {countryState.capital}
      {countryState.borders.map(b=>{
       return <Link to={b}>{b}</Link>
      })}
    </div>
  );
}
