import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
    <div className="list-group">
      {countries.map((country) => {

        return (
        <Link to={`/countries/${country.alpha3Code}`} >
        <div key={country.alpha3Code}>
        {country.name.official}
        </div>
        </Link>
        )
      })}
    </div>
  </div>
    )
  
}

export default CountriesList;
