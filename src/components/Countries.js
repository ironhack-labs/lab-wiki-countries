import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Navbar from './Navbar';


export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const resServer = await axios.get('https://restcountries.eu/rest/v2/all');
      setCountries(resServer.data);
    };


    getCountries();
   
  }, []);

  return (
    <div>
      <div>
        <Navbar title={'WikiCountries'} />
      </div>
      {countries.map((a) => {
        return (
          <Link to={`/countries/${a.alpha3Code}`}>
            <p>{a.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
