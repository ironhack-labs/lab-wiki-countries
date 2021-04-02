
import { Link } from 'react-router-dom';


const CountriesList = ({ countries }) => {



  return (
    <div className='CountriesList'>
      {countries.map((country) => {
        const { name, cca3, flag } = country;

        return (

          <Link to={`/${cca3}`} key={country.cca3} className='list-group-item list-group-item-action'>{flag} {name.common}</Link>
        )
      }
      )}

    </div>




  )
}

export default CountriesList;