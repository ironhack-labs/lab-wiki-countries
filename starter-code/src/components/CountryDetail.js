import React from 'react'
import Countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = props => {
    const id = props.match.params.id;

function placeholder() {
    const foundCountry = Countries.find(el => {
        // console.log(id, foundCountry, props);
    return el.cca3 === id;  
  });
  console.log(props)
}

return (
    <div className="col-7">
    <h1>{placeholder()}</h1>
        {/* <table className="table">
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
        </table> */}
    </div>
    )
}

export default CountryDetail;