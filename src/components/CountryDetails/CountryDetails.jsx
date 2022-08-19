import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react'

function CountryDetails(props) {

    /* const {country} = props; */
    const {countryId} = useParams()
    
    const [country, setCountry] = useState(null)

    const getCountry = async () => {
        try {
          let response = await axios.get(` https://ih-countries-api.herokuapp.com/countries`);
          setCountry(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getCountry();
        
      }, []);

  return (
    <div>
       
    </div>
  )
}

export default CountryDetails