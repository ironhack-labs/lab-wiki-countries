import React from 'react'
import { Link } from 'react-router-dom'
import countriesJson from '../countries.json';

 const CountryDetail = (props) => {
  
   // creo una función para buscar el project por su id
   let commingCountry = (cca3) => countriesJson.find((obj) => obj.cca3 === cca3);
 
   // obtengo de props.match.params su contenido
   const { params } = props.match;
 
   // llamo a la función commingCountry y le paso el id de props.match.params.id para encontrar el project del que quiero mostrar sus detalles
   const foundedCountry = commingCountry(params.cca3);

    // borderCountryName = () => {
    //     let countryFullName = Json.filter(cca3.borderCountry[index])
    // }
    let borderFromCca3 = foundedCountry.borders;


    return(
           
        <div>
            <div className="col-7">
                <h1>{foundedCountry.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{foundedCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{foundedCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {borderFromCca3.map((code) => 
                                countriesJson.find((country) => 
                                code === country.cca3)).map((item, i) => {
                        return (<li key={i}><Link to={`/${item.cca3}`}>{item.name.common}</Link></li>)
                    })}  
                            
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default CountryDetail