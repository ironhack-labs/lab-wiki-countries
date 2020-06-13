import React from 'react';
import countries from '../countries';
import {NavLink} from 'react-router-dom';

function CountryDetail(props){
    // console.log(props.match)
    const params = props.match.params;
    
    const getCountryId = (cca3) => {
        return countries.find(el => el.cca3 === cca3);
    }

    const found = getCountryId(params.cca3)

    return(
        <div class="col-7">
        {/* {found} */}
            <h1>{found.name.official}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{found.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{found.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {found.borders.map((each, i)=>{
                                        return(
                                            <li>
                                                <NavLink 
                                                    key={i}
                                                    to={`/${each}`}
                                                    > 
                                                    {each}
                                                </NavLink>
                                            </li>
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
export default CountryDetail;