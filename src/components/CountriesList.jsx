import { Link } from "react-router-dom"; 

function CountriesList(props) {
    const countries = props.countries;

    return (
            <div className="list-group">
                {countries.map(country=>(
                <Link to={"/"+country.alpha3Code} className="list-group-item list-group-item-action" key={country._id}>
                <img src={"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/"+country.alpha2Code  +".svg"} className="list-flag" alt={country.alpha2Code+" flag"}/>&nbsp;
                {country.name.common}
                </Link>))}
            </div>
    );    
}
 
export default CountriesList;