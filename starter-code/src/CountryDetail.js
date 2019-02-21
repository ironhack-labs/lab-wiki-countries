import React, { Component } from 'react';
import './CountryDetail.css';
import allCountries from './countries.json';


class CountryDetail extends Component {
    render() {

        const { params } = this.props.match;

        const countryItem = allCountries.find(oneCountry => {
            return oneCountry.cca3 === params.countryId;
        })

        return (
            <div className='CountryDetail'>
                {countryItem
                    ?
                    (<table>
                        <thead>
                            <tr>
                                <th><h2>{countryItem.name.common}</h2></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><p>Capital</p></td>
                                <td>{countryItem.capital}</td>
                            </tr>

                            <tr>
                                <td><p>Area</p></td>
                                <td>{countryItem.area}</td>
                            </tr>

                            <tr>
                                <td><p>Borders</p></td>
                                <td>
                                    {countryItem.borders.map(countryBorder => {
                                        const country = allCountries.find(oneCountry => {
                                            return oneCountry.cca3 === countryBorder;
                                        })
                                        return (
                                            <li key={countryBorder}>{country.name.common}</li>
                                        )
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>)
                        :
                            ( <p>coucou</p> )}
             </div>
        );
    }
}



// {
//     projectItem
//         ?
//         (<div>
//             <h2>Project Detail</h2>

//             <h3>{projectItem.name} ({projectItem.year})</h3>
//             <p>{projectItem.description}</p>

//             <h3>Technos :</h3>
//             <p>{projectItem.technologies}</p>
//         </div>)
//         :
//         (<h2>Project Detail</h2>)
// } 



export default CountryDetail;