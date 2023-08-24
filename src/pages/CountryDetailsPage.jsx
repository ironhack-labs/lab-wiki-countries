import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

function CountryDetails(props){
    const [foundCountry, setFoundCountry] = useState(null);
    const [fetching, setFetching] = useState(true);
    const {countryId} = useParams();

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then((response) => {
                setFoundCountry(response.data);
                setFetching(false);
            })
            .catch((error) => {
                setFetching(true);
            });
    }, [countryId]);

    return(
        <div>
            <h2>Country Details</h2>
            {fetching || fetching === null || fetching === undefined && <p>Loading...</p>}
            {!foundCountry && <h3>Country not found</h3>}
            {foundCountry && (
                <div>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}/>
                        <h1>{foundCountry.name.common}</h1>
                    <table class="table table-sm">
                        <tbody>
                            <tr>
                                <th scope="row">Capital</th>
                                <td>{foundCountry.capital}</td>
                            </tr>
                            <tr>
                                <th scope="row">Area</th>
                                <td>{foundCountry.area} km²</td>
                            </tr>
                        </tbody>
                    </table>
                        <h3>Borders</h3>
                        <div className="list-group d-inline-block w-25">
                            {foundCountry.borders.map((borderCountry)=>(
                                <div key={borderCountry} className='list-group-item list-group-item-action'>
                                    <Link to={`/${borderCountry}`}>{borderCountry}</Link>
                                </div>
                        ))}
                        </div>
                </div>
            )}
        </div>
    )
}

export default CountryDetails;
