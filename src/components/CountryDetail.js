import React from 'react';
import Countries from '../countries.json';
import { NavLink } from 'react-router-dom';

function CountryDetail(props){
    const getProject = (id) => {
        return Countries.find(el => el.cca3 === id);
    };

    const { params } = props.match;
    const foundProject = getProject(params.id)

    return (
        <div className="d-flex justify-content-center">
            <div className="col-7">
                <h1>{foundProject.name.common}</h1>
                
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                        <th>Capital</th>
                        <td>{foundProject.capital}</td>
                        </tr>
                        <tr>
                        <th>Area</th>
                        <td>{foundProject.area} km
                            <sup>2</sup>
                        </td>
                        </tr>
                        <tr>
                        <th>Borders</th>
                        <td>
                            <ul>
                                {foundProject.borders.length > 0 ? (
                                    foundProject.borders.map(borderCountry => {
                                    const getCountry = (cca3) => {
                                        return Countries.find(el => el.cca3 === cca3);
                                    };

                                    const foundBorderCountry = getCountry(borderCountry);

                                    return(
                                        <NavLink to={`/${borderCountry}`} key={foundBorderCountry.cca3}>
                                            <li>{foundBorderCountry.name.common}</li>
                                        </NavLink>
                                    )
                                })
                                ) : (
                                    <li>No borders with other countries</li>
                                )}
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                </table>
                
                <NavLink to='/'>Back</NavLink>
            </div>
        </div>
    )
}

export default CountryDetail;