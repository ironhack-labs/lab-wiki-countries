import { useParams } from "react-router-dom";

function CountriesDetails({ countries }) {
    const { id } = useParams();
    const searchCountry = countries.find(country => country.alpha3Code === id);
    return (<div>
        <h2>{searchCountry.name.common}</h2>
        <p>Capital: {searchCountry.capital}</p>
        <p>Has borders with folloving countries:</p>
        <p>{searchCountry.borders.length === 0 ? null : searchCountry.borders.map(element => {
            //console.log(element)
            const c = countries.find(country => country.alpha3Code === element);
            return <span>{c.name.common} </span>
        })}
        </p>
    </div>
    )
}

export default CountriesDetails;