import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const CountryDetailsPage = () => {
    const [country, setCountry] = useState(null)
    const {countryId} = useParams()

    useEffect(() => {
        const getCountry = async () => {
            try {
                const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
                setCountry(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getCountry();
    },[country])

  return (country ? 
    <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" />
        <h1>{country.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
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
                <ul className='list-unstyled'>
                  {country.borders.map(b => (
                    <Link to={`/countries/${b}`} key={b}>
                        <li>{b}</li>
                    </Link>

                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to={"/"}>Back to Home</Link>
      </div> : <p>Loading...</p>
  )
}

export default CountryDetailsPage


