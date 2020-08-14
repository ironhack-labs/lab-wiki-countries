import React from 'react'
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
class CountryDetail extends React.Component {
    constructor(props){
        super(props)

    }
// creo una función para buscar el project por su id
let getCountry = (id) => countries.find((obj) => obj.id === id);

  // obtengo de props.match.params su contenido
const { params } = props.match;
// llamo a la función getProject y le paso el id de props.match.params.id para encontrar el project del que quiero mostrar sus detalles
const foundCountry = getCountry(params.id);
render ()
     {const { country } = this.props;
     return(
        <div>
            <div className="col-7">
            <h1>{eachcountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{</td>
                </tr>{eachcountry.capital}
                <tr>
                  <td>Area</td>
                  <td>{eachcountry.area}s
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
     )}
}
export default CountryDetail; 