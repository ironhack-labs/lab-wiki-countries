 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountryBox from '../CountryBox/CountryBox';

import { listCountries } from '../services/CountryService';



 
 const CountriesList = () => {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
      listCountries()
        .then((countries)=> {
          setLoading(false);
          setCountries(countries)
        })
        .catch((err) => {console.error(err)})
    },[])

    return (
      <div className="col-5" style={{ overflow: 'scroll', maxHeight:"50%"}}>
        <div className='list-group'>
          {loading
            ? "Loading..."
            : countries.map((country) => {
                  return (
                    <Link to={`/${country.alpha3Code}`} key={country.alpha3Code} style={{ textDecoration: 'none' }}>
                    <div>
                    <CountryBox country={country}/>
                    </div>
                    </Link>
                  
                  )
                })
 
          }
        </div>
    
        </div>
      );
      
 };
 
 export default CountriesList;