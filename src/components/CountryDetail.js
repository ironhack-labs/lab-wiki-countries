import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom'

const CountryDetail = (props) => {

    const getCountry = (id) => countries.find(country => country.cca3 === id);
    const { params } = props.match;
    const foundCountry = getCountry(params.id);
    // const getBordingCountryName = (id) => countries.find(country => country.cca3 === id);
    // const bordingCountryNme = getBordingCountryName(params.id);

    return(
      <div className="col-6 ml-3">
        <h1>{ foundCountry.name.common } <span className="ml-2">{ foundCountry.flag }</span></h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              { foundCountry.capital.map((capital, idx) => <td key={foundCountry.cca3}>{capital}</td>)}
            </tr>
            <tr>
              <td>Area</td>
              <td>
                { foundCountry.area } km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {
                        foundCountry.borders.map(bordingCountry => <li key={bordingCountry.cca3}><Link style={{listStyle: 'none'}} to={`/countries/${bordingCountry}`}>{bordingCountry}</Link></li>)
                    }
                </ul>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Link to='/'>Hide</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default CountryDetail;