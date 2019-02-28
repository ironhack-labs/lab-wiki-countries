import React from "react";
import countries from "../countries.json"
import { Link } from 'react-router-dom';

const countryDetail = (props) => {
  
  const idPais=props.match.params.idCountry;

  const pais = countries.find((unPais)=>{
    return unPais.cca3 === idPais
  })

  return(
    <div>
      <h1>{pais.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="Columna">Capital</td>
            <td>{pais.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{pais.area} Km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                  pais.borders.map((border, index)=>{
                    const descBorder = countries.find(frontera=>
                        frontera.cca3 === border
                      )                   
                    
                    return (                
                      <li key={index}>
                        <Link to={`/countryDetail/${descBorder.cca3}`} className="list-group-item-action">{descBorder.name.common}</Link>
                      </li>           
                    )            
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
export default countryDetail