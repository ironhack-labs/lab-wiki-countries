import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CountryDetails(props) {
  let [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${props.match.params.id}`)
      .then((result) => {
          setCountry(result.data)
      })
      .catch((err) => console.log(err));
  });

  return <div>{country.alpha3Code}</div>;
}
