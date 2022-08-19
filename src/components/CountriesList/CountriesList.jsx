import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountriesList() {
    const [country, setCountry] = useState([]);

    const [input, setInput] = useState('');

    const [countryName, setCountryName] = useState([]);

    const handleInput = (e) => setInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCountryName(input);
    };

    const getCountry = async () => {
        try {
            let response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryName}`);
            setCountry(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
      getCountry();
    }, [countryName]);

  return (
    <div>
    <h3>Countries List</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">Search Country</button>
      </form>

    {country.map((countries) => {
    return (
        <div key={countries._id}>
        <h3>{countries.name.common}</h3>
        </div>
    )
})}
    </div>
  )
}

export default CountriesList