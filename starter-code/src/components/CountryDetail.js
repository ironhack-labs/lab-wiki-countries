import React from 'react'
import Countries from '../countries.json';
import { Link } from 'react-router-dom';


const CountryDetail = props => {
    const id = props.match.params.id;
    const foundCountry = Countries.find(el => {
    //   if (el.id === id) return true
    return el.cca3 === id;
  });
  console.log(id, foundCountry, props);

    return (
        <div className="col-7">
        <h1>{foundCountry.name.official}</h1>
        <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                    <td style={{ "width": "30%" }}>Capital</td>
                  <td>{foundCountry.capital}</td>
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
                                { foundCountry.borders.map(x => {
                                    return <li><Link to={`/projects/${x}`}>{x} </Link></li>
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

export default CountryDetail
