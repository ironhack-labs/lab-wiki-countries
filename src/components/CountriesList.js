import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5 max-height: 90vh; overflow: scroll">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" height="20" width="25" />{country.name.official}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CountriesList;