import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
    const [country, setCountry] = useState({});

    const { countryId } = useParams();

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => response.json())
            .then(data => {
                setCountry(data);
            })
            .catch(err => console.log(err));
    }, [countryId]);

    const flagUrl = country ? `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code?.toLowerCase()}.png` : null;

    const countryBorders = country.borders ? country.borders.map((border, index) => (
        <p key={index}>{border}</p>
    )) : null;
    return (
        <div>
            <h1>Country Details</h1>
            {country === "loading" ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <img src={flagUrl} alt={country.name?.official} />
                    <h1>{country.name?.official}</h1>

                    <div className="capital">
                        <p>Capital</p>
                        <p>{country.capital}</p>
                    </div>
                    <div className="area">
                        <p>Area</p>
                        <p>{country.area}km</p>
                    </div>
                    <div className="borders">
                        <p>Borders</p>
                        
                        <div className="countryBorders">{countryBorders}</div>
                    </div>
                </div>
            )}
        </div>
    );
}




export default CountryDetails;
