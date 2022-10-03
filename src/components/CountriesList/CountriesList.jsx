import React, { useCallback, useEffect, useState } from 'react'
import { fetchCountries } from './../../services/countries-services';

export default function CountriesList(props) {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCountries = useCallback( async () => {
       const countries = await fetchCountries();
       console.log(countries.data[0])
       setCountries(countries.data)
       setLoading(false)
    }, [])

    const handleOnClick = (country) => {
        props.onSelect(country);
    }

    useEffect(() => {
        getCountries()
    },[getCountries])

    return loading ? (
      'Loading...'
    ) : (
      <div className="d-flex flex-column align-items-center col-6 mt-5">
        {countries.map((country) => {
          const imgCode = country.alpha2Code.toLowerCase();
          return (
            <div
              key={country._id}
              onClick={() => handleOnClick(country.alpha3Code)}
              className="card p-3"
              style={{width:"250px", cursor:"pointer" }}              
            >
              <div>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${imgCode}.png`}
                  alt="flag"
                ></img>
              </div>
              <h3>{country.name.common}</h3>
            </div>
          );
        })}
      </div>
    );
}
