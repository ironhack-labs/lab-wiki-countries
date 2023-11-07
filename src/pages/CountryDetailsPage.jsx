import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
    const[country, setCountry] = useState({});
    const[fetching, setFetching] = useState(true);

    const {countryId} = useParams();
    const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;

    useEffect(()=>{
        axios.get(apiUrl).then((response)=>{
            setCountry(response.data);
            setFetching(false);
        })
    }, [countryId])
    
    return(
        <div>
            <h1 className="country-top"><b>Country Details</b></h1>
            {fetching && <p>Loading...</p>}
            {!fetching && (
                <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="dd" />
            <h1>{country.name.common}</h1>
            <div className="capitals">
            <p>Capital: {country.capital}</p>
            <hr/>
            </div>
            <p>Area: {country.area}</p>
            <hr/>
            <p className="borders">Borders:
                {country.borders.map((border)=>{
                    return(
                        <div key={border}>
                            <li className="list-border">
                            <Link to={`/${border}`}>{border}</Link>
                            </li>


                        </div>
                    )
                })}
            </p>
            <hr/>
            
        </div>
    )}
    </div>
    );
}

export default CountryDetails;
