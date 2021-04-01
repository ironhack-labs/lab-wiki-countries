
import { Link } from 'react-router-dom';


const CountriesList = ({countries}) => {

  return (
      <>
        {countries.map((country) =>(
            <Link to={`/${country.cca3}`} key={country.cca3} className='list-group-item list-group-item-action'>{country.flag} {country.name.common}</Link>
        ))}
      </>
   

  )
}

export default CountriesList;