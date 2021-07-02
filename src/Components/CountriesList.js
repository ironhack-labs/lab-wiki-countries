import {Link} from "react-router-dom";

const CountriesList =({countries = [0,1,2,3]}) => (
    <ul className ="list-group">
    {
        countries.map((country,index_c)=>(
            <li key={index_c}className="list-group-item">
            <Link to={{
                pathname:"/details",
                state:country}} >
            {country.flag}  
            {country.name.official}
            </Link>
             
            </li>
        ))
    }
    </ul>
)

export default CountriesList;