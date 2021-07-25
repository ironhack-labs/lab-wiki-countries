import {Link} from "react-router-dom"

const CountryDetails = (props) => {
    
    const paramsCountry = props.match.params
    const countryArr = props.countries.filter(country => country.cca3 === paramsCountry.cca3)

    return(
        <div className="col-7">
            <h1>{countryArr[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{countryArr[0].capital} km</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {countryArr[0].area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                     {countryArr[0].borders.map((country, index) => <li><Link key={index} to={`/${country}`}>{country}</Link></li>)}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )

}

export default CountryDetails
