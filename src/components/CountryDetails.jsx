import {Link} from "react-router-dom"
import {CountriesContext, CountriesProvider} from "../context/countries.context"
import {useContext,useState,useEffect} from "react"
import {useParams} from "react-router-dom"


function CountryDetails() {
  const [country, setCountry] = useState(null)
  const { theseCountries, getCountry } = useContext(CountriesContext)
  const { id } = useParams()

  const getImage = (code) => {
    return `https://flagpedia.net/data/flags/icon/144x108/${code.toLowerCase()}.png`
  }

  useEffect(() => {
    setCountry(getCountry(id))
}, [id, theseCountries])

return (
  <>
   
  { country &&
     
      <div className="col-7">
          <img src={getImage(country.alpha2Code)} alt='country' />
          <h1>{country.name.common}</h1>
          <table className="table">
          <thead></thead>
          <tbody>
              <tr>
              <td style={{width: "30%"}}>Capital of the Country</td>
              <td>{country.capital[0]}</td>
              </tr>
              <tr>
              <td>Area</td>
              <td>
                  {country.area} km
                  <sup>2</sup>
              </td>
              </tr>
              <tr>
              <td>Borders</td>
              <td>
                  <ul>

                  {
                      country.borders.map((border) => {
                          return (
                              <li>
                                  <Link to={`/${border}`}>{getCountry(border).name.common}
                                  </Link>
                              </li>
                          )
                      })
                  }

                  </ul>
              </td>
              </tr>
          </tbody>
          </table>
          </div>

  }

  
  
  {console.log(country)}

</>
)
}

export default CountryDetails
