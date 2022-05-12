import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails(props) {
    const { countries } = props;
    const [country, setCountry] = useState({})
    const { countryId } = useParams();

    useEffect(() => {
        const selectedCountry = countries.find(item => {
            return item.alpha3Code === countryId;
        })
        setCountry(selectedCountry);

    }, [countries, countryId]);

    return (
        <div key={country.alpha3Code}>
            {/* <h1>Name: {country.name.official}</h1> */}
            <h1>Country Code: {country.alpha3Code}</h1>
            <h1>Capital: {country.capital}</h1>
            <h1>Region: {country.region}</h1>
        </div>
    )
}
export default CountryDetails;
