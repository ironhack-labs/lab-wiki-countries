import React from 'react';
import data from '../data.json'

const CountryDetail = (props) => {
  const filterData = data.filter(element => element.cca3 === props.match.params.cca3)
  console.log(filterData[0].name.common)
  const [oneData] = filterData;  

  return (
  <div className="col-7">
  <div>
    <h1>{oneData.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{oneData.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>551695 km
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
  </div>
  )
}

export default CountryDetail;