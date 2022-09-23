import {Link} from 'react-router-dom'


export default function CountriesList(props) {
  const {countries} = props
  return (
    <ul className="main-list">
      {countries.map(country => {
        return (
          
          <li key={country.alpha3Code}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
          <Link className='links' to={country.alpha3Code}><span>{country.name.official}</span></Link>
          </li>
        )
      })}
    </ul>
  )
}