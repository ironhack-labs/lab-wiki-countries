import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CountryDetails() {
    const { countryId } = useParams();

    const [country, setCountry] = useState([]);
    useEffect(() => {
        console.log('mount');
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                console.log(response.data);
                setCountry(response.data)
            });
        return () => {
            console.log("unmount");
        };
    }, []);

    if (country.length === 0) {
        return <div>Loading this country...</div>;
    }

    return(
       <div>
            <h1>Country details</h1> 
            <p><img style={{width: '30px', marginRight: '10px'}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>{country.name.common}</p>
            <table className="table">
                <tbody>
                    <tr>
                    <td colSpan="2">Capital:</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                    <td colSpan="2">Area:</td>
                        <td>{country.area} km²</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Borders</td>
                        <td>
                            {country.borders ? (country.borders.map((border) => (
                            <li key={border}>
                                <Link to={`/${border}`} reloadDocument>{border}</Link>
                            </li>
                            ))) : (
                                <li>No borders</li>
                            )}                                                          
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;
