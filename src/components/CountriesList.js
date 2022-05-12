import { Link } from "react-router-dom";

function CountriesList(props) {
    // console.log(props.countries[0]);

    return(
        <div>
            <h2>List of countries:</h2>
            {props.countries.map((country) => {
                return(
                    <div key={country.alpha3Code}>
                    <h3>{country.name.official}</h3>
                    <Link to={`/country/${country.alpha3Code}`}> + More Detais </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default CountriesList;