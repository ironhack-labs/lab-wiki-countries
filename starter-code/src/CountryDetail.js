
import React, { Component } from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';



const countryDetail = (props) => {
    console.log(props)
  
    const getCountry = (id) => {
      const theCountry = country => {
        return country.cca3=== id;
      }
      return countries.find(theCountry)
    };


    const { params } = props.match;
    const foundCountry = getCountry(params.id)
    console.log("foundCountry");
    console.log(foundCountry);
    

        return (
            <div>
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{foundCountry.capital[0]}</td>
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
                        {foundCountry.borders.map(function (bordercca3,index) {
                        return (
                            <li key={bordercca3}>
                                <Link  to={`/${bordercca3}`}>{getCountry(bordercca3).name.common} </Link>
                                {/* <Link key={bordercca3} to={`/${bordercca3}`}>{bordercca3} </Link> */}
                            </li>

            
                        )
                        })}

                        {/* {getCountry.borders.map(function (bordercca3,index) {
                        return (
                            
                        <Link key={bordercca3} to={`/${bordercca3}`}>{get} </Link>
                        )
                        })} */}

                            </ul>
                        </td>
                    </tr>
                </tbody>
        </table>
        </div>
          )
    }
  
  export default countryDetail;