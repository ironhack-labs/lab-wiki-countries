import { Link, useParams } from "react-router-dom"

function CountryDetails2({ countriesData }) {
    const { countryID } = useParams()



    const result = countriesData.find(object => {
        if (object.alpha3Code === countryID) {
            return object
        };
    });



    return (
        <div>
            <h1>Detalles del País</h1>
            <p>{countryID}</p>
            <p>{result.name.common}</p>
            <p>{result.capital}</p>
            <p>{result.area}</p>
            <p>{result.borders}</p>
            <hr />
            <Link to="/">Volver a Countries List</Link>

        </div>
    );
}
export default CountryDetails2;


