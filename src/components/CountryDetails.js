import React from 'react';

export const CountryDetails = ({match,location,history}) => {
    console.log('que es esto:', location)
    
    return (
    <div style={{width:'100%'}}>
        <h1>{location.state.name.official}</h1>
        <table class="table">
            <thead/>
            <tbody>
                <tr>
                    <td>Capital</td>
                    <td>{location.state.capital[0] ==="" ? "No tiene capital":location.state.capital[0] }</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td> {location.state.area} km
                        <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {
                            location.state.borders.length ?

                            location.state.borders.map((item,index_b)=> <li key={index_b}>{item}</li>)

                            :
                            <li>No colinda con nada</li>
                            }
                        
                        </ul>
                    </td>
                </tr>
            </tbody>
            </table>
    </div>
)};