import { Link } from "react-router-dom";

const CountriesList = (props) => {

  const { countries } = props

    return (
        <div class="list-group">
          {
            countries.map((country) => {
              const countryFlag = (
                <img 
                width={20}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                alt={`flag of ${country.name.common}`} />
              )
              return (
                <Link
                key={country.alpha3Code}
                  className="list-group-item list-group-action"
                  to={`/${country.alpha3Code}`}
                  >
                    {countryFlag} {' '}
                    {country.name.common}
                </Link>
              )
            })
          }
        </div>          
  )
}



export default CountriesList;