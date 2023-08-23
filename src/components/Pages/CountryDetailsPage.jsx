import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetailsPage() {
    const [country, setCountry] = useState(null); // Initialize as null
    const [fetching, setFetching] = useState(true);

    const { countryId } = useParams();
    const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setCountry(response.data);
            setFetching(false);
        });
    }, []);

    if (!country) {
        return (<p>Loading...</p>)
    } else {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" />
                <p>Capital: </p>
                <p>{country.capital}</p>
                <p>Area: </p>
                <p>{country.area}</p>
                <p>Borders: </p>
                <p>{country.borders.slice(0, 3).join(" ")}</p>
            </div>
        );
    }
}

export default CountryDetailsPage;
