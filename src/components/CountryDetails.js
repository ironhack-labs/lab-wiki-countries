import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const CountryDetails = () => {

    const [country, setCountry] = useState(null);

    const {countryId} = useParams();

    const imgUrl = 'https://flagpedia.net/data/flags/icon/72x54/';

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => {
                setCountry(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    })

    return (
        <div className="col-7">
            {country ?
            <>
                <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.webp`} alt={country.name.common} />
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:'30%'}}>Capital</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country.area} Km<sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map((borderCountry, index) => {
                                        return(
                                            <li key={index}>
                                                <Link to={`/${borderCountry}`}>
                                                    <img src={`${imgUrl}${borderCountry.slice(0,2).toLowerCase()}.png`} style={{width:'25px', marginRight:'10px'}} alt={borderCountry}/>
                                                    {borderCountry}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
                : <div className="spinner-border"></div>
            }
        </div>
    )
};

export default CountryDetails;