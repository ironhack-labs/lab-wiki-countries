import  React from 'react';
import paises from '../countries.json'
import {Link} from 'react-router-dom'

const countryDetails = props =>{
    
    const getCountry = id =>{
        return paises.find(unPais =>{
            return unPais.cca3 === id;
        });
    };
    const {params} = props.match;
    const paisEncontrado = getCountry (params.id);

    return(
        <div className="col-6">
        <h1>{paisEncontrado.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{paisEncontrado.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{`${paisEncontrado.area} km`}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {paisEncontrado.borders.map((vecinos, index)=>{
                      return (
                        <li className="list-group-item"><Link 
                          key = {index}
                          to={`/pais/${vecinos}`}
                          >
                          {`${vecinos}`}
                          </Link></li>
                      )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default countryDetails