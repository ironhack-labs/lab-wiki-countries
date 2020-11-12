import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// import { countries } from "./App"


const CountryDetails = (props) => {
    console.log(props)
    let getCountry = cca3 => props.location.state.countries.find(country => country.cca3 === cca3);
    console.log(props)

    const { params } = props.match;


    // creamos una constante donde guardamos el resultado de invocar a getProject con el id que sacamos de this.props.match.params.id
    const foundCountry = getCountry(params.cca3)

    return (
        <div className= "country-description">
              <div className="col-10">
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{foundCountry.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                      {foundCountry.borders.map(eachBorderCountry => {

                          return (<li key={eachBorderCountry}><Link to={{pathname:`/${eachBorderCountry}`, state: {countries: props.location.state.countries}}}>{getCountry(eachBorderCountry).name.common}</Link></li>)
                       
                      })
                      }
                 
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    )
}

export default CountryDetails
