import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const CountriesList = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
  
      axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
  
        setCountries(response.data)
  
      })
  
    }, [])
    
    return (
        <div className="col-4 mx-4 mt-4">
            {countries.map((country) => {
                return (
                    <Link
                        key={country.alpha3Code}
                        className="list-group-item list-group-item-action"
                        to={`/${country.alpha3Code}`}>
                            <img
                                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                alt='flag'
                                style={{ width: '35px', margin: '2px 10px 2px 2px'}}
                            />
                            <p>{country.name.common}</p>
                    </Link>
                );
            })}
        </div>
    );
};

export default CountriesList;