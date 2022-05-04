import { Link, useParams } from "react-router-dom"

function CountryDetails({ countries }) {

    const { id } = useParams()

    const countryDetails = countries.find((country) => {
        return country.alpha3Code == id;
    });

    return (
        <div>
            <h2>Name: {countryDetails.name.common}</h2>
            <h3>Capital: {countryDetails.capital}</h3>
            <p>Area: {countryDetails.area} </p>
            <p>Borders: {countryDetails.borders} </p>
            <Link to="/projects">Volver a proyectos</Link>
        </div>
    );
}

export default CountryDetails;