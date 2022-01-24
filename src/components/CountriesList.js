import { Link } from 'react-router-dom';


const CountriesList = ({countries}) =>{
    
return(
    <ul>
        {countries.map((country) => <li key={country.name.common}><Link to={`/${country.alpha3Code}`}>{country.name.common}</Link> </li>)}
    </ul>
     
)


}

export default CountriesList