import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'

function CountryDetails(props) {
  const [country, setCountry] = useState()

  const { a3 } = useParams();
  
  const tdStyle = { width: "30%" }
  

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${a3.toUpperCase()}`)
      .then((response) => {
        console.log("response:", response)
        setCountry(response.data)
        console.log("country", response.data)
      })
      .catch(err => console.log("error getting contry details :", err))
  }, [a3])

  if (!country) return 'loading...'

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="drapeau" />
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}km²
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(borderA3 => {
                  const borderCountry = props.data.find((el) => { return el.alpha3Code === borderA3 })
                  return (<li key={borderA3}><Link to={`/${borderA3.toLowerCase()}`}>{borderCountry.name.common}</Link></li>)
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
