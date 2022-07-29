import { Link } from 'react-router-dom';
function CountriesList(props){
    return (
    <div>{props.countries.map((country) => {
        return(
            <Link to= {country.alpha3Code}>Name:{country.name.common}</Link>
        )
    })  } </div>  
    )
}
export default CountriesList;
