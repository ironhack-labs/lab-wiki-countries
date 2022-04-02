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
    <div>
    {country && country.name.common}
    <p>Border</p>
    {borders.map((border) => {
        return (
            <p key={border._id}> <Link to={`/${border.alpha3Code}`}> {border.name.common} </Link> </p>
        )
    })}
    </div>
  )
}
