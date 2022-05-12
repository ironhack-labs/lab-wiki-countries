import { Link } from "react-router-dom";

function CountriesList(props) {
    return(
        <div className="col-5">
            <div className="list-group">
            {props.countriesList.map(country => {
                return(
                    <div key={country._id} className="list-group-item list-group-item-action">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${(country.alpha2Code).toLowerCase()}.png`} alt={country.name.official}></img>
                        <Link to={`/countryDetails/${country.alpha3Code}`}>{country.name.official}</Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default CountriesList;