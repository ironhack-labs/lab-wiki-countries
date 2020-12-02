import React from 'react'
import countries from '../countries.json';
import { Link } from 'react-router-dom';


export const CountryDetails =({location,history}) =>{
  return(
    <div style={{width:'100%'}}>
    <h1>{location.state.name.official}</h1>
    <table className="table">
    <thead/>
    <tbody>
    <tr>
      <td>Capital</td>
      <td>{location.state.capital[0]==="" ? "No tiene capital": location.state.capital[0]}</td>
    </tr>
    <tr>
      <td>Área</td>
      <td>{location.state.area} km</td>
      <sup>2</sup>
    </tr>
    <tr>
      <td>Borders</td>
      <td>
        <ul>
          {
            location.state.borders.length ?
            location.state.borders.map((item,index_b) => 
            <li key = {index_b}>
            <Link
            to = {{
              pathname:"/detail",
              state: countries.find (element => item === element.cca3)
            }}
            >
            {item}
            </Link>
            </li>)
            :
            <li>No conlinda con nada</li>
          }
            </ul>
            </td>
            </tr>
            </tbody>
            </table>
            </div>
  );
        }

    