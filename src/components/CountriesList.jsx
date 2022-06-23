import { Link } from 'react-router-dom';


const CountriesList = ({countries}) => {

  const countriesLinks = countries.map(country => {
    return <Link key={country.alpha3Code} to={country.alpha3Code} className="list-group-item list-group-item-action">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country.name.common" style={{height: `1rem`}}/>
      <span> </span>
      {country.name.common}
    </Link>
  });

  return (
    <div className="list-group">
      {countriesLinks}
    </div>
  )
}

export default CountriesList;