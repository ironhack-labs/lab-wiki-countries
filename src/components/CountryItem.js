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
            <div className='country-info'>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png` }alt="" />
                <h2>{country.name.common}</h2>
            </div>
            <table class="table table-hover">
                <tbody>
                    <tr>
                        <th scope="row">Capital</th>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <th scope="row">Area</th>
                        <td>{country.area}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )}

        <div className=''>
            <table class="table table-hover">
                <tbody>
                    <tr>
                        <th scope="row">Borders</th>
                        <td>{borders.map(border => {
                            return (
                                <ul className="border-name">
                                    <li><Link to={`/${border.alpha3Code}`} > {border.name.common} </Link></li>
                                </ul>
                            )
                        })}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}