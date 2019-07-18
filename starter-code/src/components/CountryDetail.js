import React from 'react'
import {Link} from 'react-router-dom'
import data from "../countries.json"

const CountryDetail = props => {
    const country = data.find(e => e.cca3 === props.match.params.cca3)

    return(
        <div className="col-7">

            
            <h1>{console.log(country.name.common)}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td >Capital</td>
                  <td>{console.log(country.capital)}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area}   <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country.borders.map((cca3,i)=>{
                            const count = data.find(e => e.cca3 === cca3)
                            //console.log(count)
                    return ( <li key={i} ><Link to={`/e/${cca3}`}>
                    {console.log(count.name.common)}
                    </Link></li>)   
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetail           