import React from 'react';
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const CountryDetail  = (props) => {
  const id = props.match.params.id;
  const foundCountry = countries.find(country=>country.cca3===id);
  console.log(foundCountry)

    return(
      <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="td-capital" >Capital</td>
                  <td>{foundCountry.capital[0]}</td>
                  </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {foundCountry.borders.map((border,i)=>(
                        <li key={i}> <Link to={`/${border}`}>{countries.find(country=>country.cca3===border).name.common}</Link> </li>
                      ))}
                    </ul>
                    
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        
     

    )
  
}

export default CountryDetail