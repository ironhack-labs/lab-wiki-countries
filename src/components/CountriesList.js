import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
    <div className="list-group">
      {countries.map((country) => {
        return (
            <Link className="list-group-item list-group-item-action" to={`/countries/${country.alpha3Code}`} key={country.alpha3Code} >
            {country.name.official}</Link>
        )
      })}
    </div>
  </div>
    )

}

export default CountriesList;
