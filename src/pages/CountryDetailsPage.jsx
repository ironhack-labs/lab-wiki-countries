import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function CountryDetails() {

    const { countryId } = useParams()
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            .then(response => {
                setCountry(response.data);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }, [countryId]);

    if (country === null) {
        return (<div>Country Details</div>)
    }
    return (
        <div>
            <h1>Country Details</h1>
            <hr />
            <div>
                <h2>{country.name.common}</h2>
                <h5>{country.capital}</h5>
                <h6>{country.area} KM</h6>
                <h6>{country.borders.map(eachCountry => {
                    return (
                        <Link to={`/${eachCountry}`}> {eachCountry}</Link>
                    )
                })}</h6>
            </div>
        </div>

    )
}

export default CountryDetails;
