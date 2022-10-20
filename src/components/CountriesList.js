import { Routes, Route, Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function CountriesList({ countries }) {
    //console.log(countries[0]);
    return (
        <div className="col-5">
            <div className="list-group">
                {countries.map((country) => {
                    //console.log(country.alpha2Code.toLowerCase);
                    return (
                        <div>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}> {country.name.official}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CountriesList;