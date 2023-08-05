import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react";

const CountryDetails= ({countries}) => {

    const { id } = useParams();

    const [foundCountry, setFoundCountry] = useState(null);

    const width = {
        width: "30%"
    }

    const url =  `https://ih-countries-api.herokuapp.com/countries/${id}`

  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(response => {
        setFoundCountry(response)
      })
  }, [id]);

    return (
          <>
            {!foundCountry && <h3>Country not found!</h3>}
            
            {foundCountry && (
              <div className="col-7">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} width="100px" />
                <h1>{foundCountry.name.common}</h1>
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={width}>Capital</td>
                      <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                      {foundCountry.area} km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                          {foundCountry.borders.map(border => {
                            const borderCountry = countries.find( country => country.alpha3Code === border)
                            return (
                                    <li key={border}>
                                      <Link to={`/${border}`}>{borderCountry.name.common}</Link>
                                    </li>
                                  )
                          })}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </>
    );
}

export default CountryDetails;