import {Routes, Route, Link} from "react-router-dom";

function CountriesList (props) {
    console.log("countries error", props)
    return(
        <div>
            <h2>List of countries from API:</h2>
            
            {props.countries.map((country)=>{
                
                return (
                    <div className="country-box">
                        <h2>{country.name.common}</h2>
                        <Link to={`/${country.id}`}>Country details</Link>
                        </div>
                )
            })}

        </div>
    )
}

export default CountriesList;