import React from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

  const matchCountry = (arg)  => {
    return data.map(e => {
        if(e.cca3 === arg){
          return e.name.common
        } else {
          return false
        }
      })
  }

const CountryDetail = (props) => {
  const filterData = data.filter(element => element.cca3 === props.match.params.cca3)
  const [oneData] = filterData;  
  return (
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
              <td>{oneData.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {
                    oneData.borders.map((eachCountry, index) => {
                      return <li key={index}><Link  to={`/${eachCountry}`}>{
                        
                        matchCountry(eachCountry)
                      
                      }</Link></li>
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table> 
  </div>
  )
}

export default CountryDetail;