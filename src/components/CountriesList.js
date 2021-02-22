// import react from "react";
import { Link } from "react-router-dom";

function CountriesList(props){
    console.log("COUNTRIES: ",props.countries)
    const countryList = props.countries.map((e) => {
        return (
            <div key={e.cca3}>
            
             <Link to={e.cca3} >
            <h2>{e.name.official}</h2>
            </Link>
            
            </div>
        )
            })
    return(<div>
       {countryList}
    </div>
        )
}
export default CountriesList;