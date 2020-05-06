import React from 'react'
import './country-detail.css'
import countries from '../../countries.json'
import { Link } from 'react-router-dom'



const CountryDetail = props => {


const myCountries = countries.find(elm => props.match.params.cca3 === elm.cca3) 

    console.log(props)
    return (

        <div className="col-7">
            <h1>{myCountries.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{myCountries.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{myCountries.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  <ul className='list-group'>
                    { myCountries.borders.map((border, idx) => (

                        <Link className='list-group-item list-group-item-action' key={idx} to={border}>
                                        {countries.find((country) => country.cca3 === border).name.common }
                                    </Link>
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