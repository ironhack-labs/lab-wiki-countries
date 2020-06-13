import React from 'react';
import  countries  from '../countries.json';
import { NavLink } from 'react-router-dom';

export default function CountryDetail(props) {
  const getCountry = (cca3) => {
    return countries.find((el) => el.cca3 === cca3);
  };
    const { params } = props.match;
    const eachCountry = getCountry(params.cca3);

    const borders = eachCountry.borders.map((eachBorder) => {
    const eachFullBorder = getCountry(eachBorder);

    return (
      <li key={eachBorder}>
        <NavLink to={`/countries/${eachBorder}`}>
          {eachFullBorder.name.common}
        </NavLink>
      </li>
    );
  });

  return (
    <div class="col-7" key={eachCountry.id}>
                    <h1>{eachCountry.name.common}</h1>
                    <table class="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                            <td style={{width: '30%'}}>Capital</td>
                            <td>{eachCountry.capital}</td>
                            </tr>
                            <tr>
                            <td>Area</td>
                            <td>{eachCountry.area} km
                                <sup>2</sup>
                            </td>
                            </tr>
                            <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {eachCountry.borders.length ? (borders) : <i>None</i>}
                                </ul>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
  );
}