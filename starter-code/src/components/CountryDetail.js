import React from 'react';
import { Link } from 'react-router-dom';


const CountryDetail = props => {

    const getCountry = id => {
        const theCountry = oneCountry => {
          return oneCountry.id === id
        }
        // return this.state.countries.find(theCountry)
     }

    const foundCountry = getCountry(props.match.params.cca3)


    return (
      
        <div className="col-7">
          <h1>{props.name}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{props.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{props.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    
                    <li><a href="/AND">Andorra</a></li>
                    <li><a href="/BEL">Belgium</a></li>
                    <li><a href="/DEU">Germany</a></li>
                    <li><a href="/ITA">Italy</a></li>
                    <li><a href="/LUX">Luxembourg</a></li>
                    <li><a href="/MCO">Monaco</a></li>
                    <li><a href="/ESP">Spain</a></li>
                    <li><a href="/CHE">Switzerland</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
    );
}

export default CountryDetail;