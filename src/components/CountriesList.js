import { Link } from "react-router-dom";

function CountriesList({countries}) {
return ( 

        
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">

            {/* NECESITO ABRIR LOS {} PORQUE VOY A ESCRIBIR JAVASCRIPT DENTRO DE HTML OR WHATEVER */}
            {countries.map(country =>{
                return(
                    <Link key={country.alpha3Code} to={`/countryDetails/${country.alpha3Code}`} className="list-group-item list-group-item-action"><img style={{width:"5%"}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag-icon"/> {country.name.common}</Link>
                )
            })}
            
            {/* <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a> */}
            
        </div>
        </div>

    );
}

export default CountriesList;