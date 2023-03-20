 import React, { useEffect, useState } from 'react';
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
      <div className="col-5" style={{ overflow: 'scroll', maxHeight: '90'}}>
        <div className='list-group'>
          {loading
            ? "Loading..."
            : countries.map((country) => {
                  return (
                   <CountryBox key={country.name.common} name={country.name.common} 
                   twoDigits={country.alpha2Code} threeDigits={country.alpha3Code}/>
                  )
                })
 
          }
        </div>
        </div>
      );
      
 };
 
 export default CountriesList;