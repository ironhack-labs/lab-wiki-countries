import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CountriesList (props){
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        setCountries(props.countries);                 
      }, [props.countries]);     
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">
        {countries.map(country =>{
           return <Link key={country.alpha3Code} className="list-group-item list-group-item-action" to={country.alpha3Code}
           >🇦🇼 {country.name.common} </Link>
        })
        }
    </div>
  </div>
)
}
  export default CountriesList