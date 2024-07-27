import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/countries.css";

function CountryDetails() {
    const [country, setCountry] = useState(null);
    const {countryId} = useParams();
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
        setLoading(false);
        })
        .catch((error) => {
        console.error("Error fetching the country data:", error);
        setLoading(false);
        });
    }, [countryId]);
    
    if (loading) {
        return <h1>Loading...</h1>;
    }
      if (!country) {
        return <h1>Country not found</h1>; // Display message if country data is not available
      }
      console.log("Country state:", country);
    return(
        <div className="container">
            <h1 className="page-title">Country Details</h1>
            <h2>{country.name.common}</h2>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
             alt={`${country.name.common} flag`} />
             <p><strong>Capital: </strong> {country.capital[0]}</p>
             <p><strong>Area: </strong> {country.area} km<sup>2</sup></p>
             <p>
                <strong>Borders: </strong>
                {country.borders.length > 0 ? (
                    country.borders.map((border, index) => (
                        <span key={border}>
                            <Link to={`/${border}`}>{border}</Link>
                            {index < country.borders.length - 1 && ', '}
                        </span>
                    ))
                ) : (
                    'None'
                )}
             </p>
             <p><strong>Region: </strong> {country.region}</p>
             <p><strong>Subregion: </strong> {country.subregion}</p>
        </div>
    )
}

export default CountryDetails;
