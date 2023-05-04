import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function CountryDetails({ countries }) {

    //null so it is falsy so it continues to render to country
    const [country, setCountry] = useState(null)

    //useParams() is only for URL
    const { alpha3Code } = useParams()

    useEffect(() => {
        const selectedCountry = countries.find(country => {
            return country.alpha3Code === alpha3Code
        })
        
        setCountry(selectedCountry)
    }, [alpha3Code])
    
    function getCountryFromAlpha3Code(alpha3Code) {
        const country = countries.find(country => {
            return country.alpha3Code === alpha3Code
        })
        return country.name.common
    }

    if (country) {
        return (
            <div className="col-7">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" width="10%"/>
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital: </td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area: </td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders: </td>
              <td>
                <ul>
                  { country.borders.map(alpha3Code => {
                    return (
                        <li>
                            <Link to={`/${alpha3Code}`}>{getCountryFromAlpha3Code(alpha3Code)}</Link>
                         </li>
                    )
                  }) }  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}
}

export default CountryDetails
