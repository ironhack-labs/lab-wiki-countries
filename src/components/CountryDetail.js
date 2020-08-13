import React from 'react'
import countries from './../countries.json';
import { Link } from 'react-router-dom';

 
const CountryDetail = (props) => {
  //guardamos la id que traemos de la ruta de App.js el cual hemos visto como llamarlo al mirar el objeto en la consola del browser
  const countryId = props.match.params.cca3
  //en la siguiente constante lo que hacemos es que busque en countries el country que tenga el mismo id que el guardado en la anterior variable.
  const countryDetail = countries.find((country) => country.cca3 === countryId)

  //console.log(countryDetail)
  //console.log(props)
  return(
       <div>
         <div className="col-7">
                {/*Ponemos countryDetail ya que es el nombre que le hemos puesto a la variable que tiene la info del country a mostrar */}
                <h1>{countryDetail.name.common}</h1>
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={{width: '30%'}}>Capital</td>
                      <td>{countryDetail.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>{countryDetail.area} km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                        {/*En esta parte queremos mostrar los paises que bordean el country guardado en countryDetail */}
                        {countryDetail.borders.map( (oneBorder, index) => {
                          /*Aquí buscamos los countries de los cuales su id/cca3 coincide con la del objeto y los guarda en border */
                          const border = countries.find((country) => country.cca3 === oneBorder)
                          /*Al hacer el return agregamos Link dónde mostramos país y accedemos a su información */
                          return <Link to={`/${border.cca3}`}><li>{border.name.common}</li></Link>
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
  

export default CountryDetail;