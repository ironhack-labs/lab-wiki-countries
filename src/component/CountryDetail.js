import React from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';

export default class CountryDetail extends React.Component {

    render() {

         const findCountry = countries.find((e) => {
             return this.props.match.params.id === e.cca3
         });
    
         const getCode = (e) => {
        var country = countries.find((country) => e === country.cca3);
        return country.name.common
      };
    
          return (
             <div>
                 <h1>{findCountry.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td>Capital</td>
                            {findCountry.capital.map((e, i) => (
                            <td key={i}>{e}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                            {findCountry.area} km <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                            <ul>
                                {findCountry.borders.map((e, i) => (
                                <li key={i}>
                                    <Link to={`/countries/${e}`}> {getCode(e)}</Link>
                                </li>
                                ))}
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
);
}
}