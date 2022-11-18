import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    
    const listCountry = props.countriesL.map((country) => {
        console.log(country)
        return(
            <div key={country.alpha3Code}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} type="" />
                <h4>{country.name.common}</h4>
                
                <Link to={`/countries/${country.alpha3Code}`}>Click for details</Link>
            </div>
        )
    })
    return (
        <div>
          <h2>List</h2> 
          <div>{listCountry}</div>
        </div>
    )
}

export default CountriesList
