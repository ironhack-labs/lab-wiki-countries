import { useParams } from "react-router-dom"
// import countries from './countries.json'

function CountryDetails({ countries }) {

    const { id } = useParams()

    console.log({ id })

    const foundCountry = countries.find((country) => {
        return country.alpha3Code === id;
    });

    return (
        <div>
            <p> {foundCountry.name.common} </p>
            <p> {foundCountry.capital} </p>
            <p> {foundCountry.area} </p>
        </div>
    );
}

export default CountryDetails