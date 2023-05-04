import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

function CountryDetails({countriesArr}){
  const countryId = useParams().id
  const [selectedCountry, setSelectedCountry] = useState(countriesArr.find(country => country.alpha3Code === countryId ))

  useEffect(() => {
    setSelectedCountry(countriesArr.find(country => {
      return country.alpha3Code === countryId
    }))
  }, [countryId])

  return(
    <div className="col-7">
      <img height={125} src={`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`}/>
      <h1>{selectedCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{selectedCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {selectedCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul style={{listStyle: 'none'}}>
                {selectedCountry.borders.map(borderingCountryCode => {
                  const borderingCountry = countriesArr.find(country => country.alpha3Code === borderingCountryCode)
                  return(
                    <li>
                      <Link to={`/details/${borderingCountry.alpha3Code}`}>{borderingCountry.name.common}</Link>
                    </li>
                  )
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}
export default CountryDetails