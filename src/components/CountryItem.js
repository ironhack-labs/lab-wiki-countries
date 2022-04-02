import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect , useState} from 'react';
import { countryItem } from '../services/CountriesService'

export default function CountryItem() {

    const {id} = useParams();
    const [country, setCountry] = useState(null);
    const [borders, setBorders] = useState([]);

    useEffect(() => {
        countryItem(id)
        .then((response) => setCountry(response))
    }, [id])

    useEffect(() => {
        if (country) {
            const promises = country.borders.map(border => countryItem(border));
            console.log(promises)

            Promise.all(promises)
                .then(response => setBorders(response))
                .catch(err =>  console.log(err))
        }
    }, [country])

  return (
    <div className=''>
    {country && country.name.common && (
        <div>
            <div>
                <h2>{country.name.common}</h2>
            </div>

            <div>
                <h4>Capital: {country.capital[0]}</h4>
                <h5>Area: {country.area}</h5>

            </div>
            
            {console.log(country)}
        </div>
    )}

    {borders.map((border) => {
        return (
            <p key={border._id}> <Link to={`/${border.alpha3Code}`}> {border.name.common} </Link> </p>
        )
    })}
    </div>
  )
}
