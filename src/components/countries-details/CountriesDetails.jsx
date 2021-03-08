import { Link } from "react-router-dom";

function CountriesDetails(props) {
    
    const countryCode = props.match.params.country
    const country = props.countries.find(country => country.alpha3Code === countryCode)
    return(
        <div className="col-6">
          <div className="row">
            <h1 className="mr-3">{country.name}</h1>
            <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt={country.name}/>
          </div>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area}km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {country.borders.map((cca3, i) => (
                          <li key={i}>
                              <Link to={`/${cca3}`}>{props.countries.find(country => country.alpha3Code === cca3).name}</Link>
                          </li>
                      ))}       
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountriesDetails;