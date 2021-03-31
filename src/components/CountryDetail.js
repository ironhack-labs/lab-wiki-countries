import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom'

const CountryDetail = (props) => {

    const getCountry = (id) => countries.find(country => country.cca3 === id);
    const { params } = props.match;
    const foundCountry = getCountry(params.id);
    // const getBordingCountryName = (id) => countries.find(country => country.cca3 === id);
    // const bordingCountryNme = getBordingCountryName(params.id);

    console.log('foundCountry', foundCountry)
    console.log('foundCountry.borders', foundCountry.borders)

    return(
        <div className="col-6 ml-3">
        <h1>{ foundCountry.name.common } <span className="ml-2">{ foundCountry.flag }</span></h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              { foundCountry.capital.map((capital, idx) => <td key={idx}>{capital}</td>)}
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
                  {/* <li><a href="/AND">Andorra</a></li>
                  <li><a href="/BEL">Belgium</a></li>
                  <li><a href="/DEU">Germany</a></li>
                  <li><a href="/ITA">Italy</a></li>
                  <li><a href="/LUX">Luxembourg</a></li>
                  <li><a href="/MCO">Monaco</a></li>
                  <li><a href="/ESP">Spain</a></li>
                  <li><a href="/CHE">Switzerland</a></li> */}
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