import CountriesList from './CountriesList';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function CountryDetails(props) {
    const {countryID} = useParams();
    const [country, setCountry] = useState([])

    console.log(`countryID: ${countryID}`)

    const getCountries = async () => {
        try {
          let response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
          setCountry(response.data)
          console.log(response.data);
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {

        getCountries();
      }, []);

    const foundCountry = country.find((country) => country.alpha3Code === countryID);


  return (
    <div>
        {foundCountry && (
        <>
          <h2>{foundCountry.name.official}</h2>
        </>
      )}
    </div>
  )
}

export default CountryDetails