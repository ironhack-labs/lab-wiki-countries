import { useParams, Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

function CountryDetails(props) {
    const {code} = useParams()
    const [oneCountry, setOneCountry] = useState(null)


    // const oneCountry = props.countries.find(country => {
    //     return code === country.alpha3Code
    // })

    useEffect(() => {
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${code}`)
          .then(response => {
            setOneCountry(response.data)
          })
      }, [code])

      if (!oneCountry) {
        return <div><p>Loading</p></div>
      } else {
    
  return (
    <div className="col-7">
      <h1>{oneCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{oneCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {oneCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {oneCountry.borders.map(border => {
                return (
                <li key={border}>
                  <Link to={`countryDetails/${border}`}>{props.countries.find(country => country.alpha3Code === border).name.common}</Link>
                </li>
                )
              })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
}

export default CountryDetails;
