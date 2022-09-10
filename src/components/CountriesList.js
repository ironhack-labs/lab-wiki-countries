import countries from "../countries.json";
import { Link } from "react-router-dom";
import "./style/CountriesList.css";

function CountriesList() {
    return (
        <ul className="countries-list">
            {countries.map(country => (
                <li>
                    <Link className="country-button" to={`/${country.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
                        {country.name.common}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default CountriesList;