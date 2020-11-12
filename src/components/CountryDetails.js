import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails=(props) =>{
    console.log(props);

    // buscamos por id el project que coincide con el id que recibimos por parámetro. Es una función
    let getCountry = cca3 => countries.find(obj => obj.cca3 === cca3);

    // desestructuramos params de props.match
    const { params } = props.match;

    // const id = props.match.params.id

    // creamos una constante donde guardamos el resultado de invocar a getProject con el id que sacamos de this.props.match.params.id
    const foundCountry = getCountry(params.cca3)

    return (
    <div>
    <p>{foundCountry.capital}</p>
    <p>{foundCountry.area}</p>
    <p>{foundCountry.borders}</p>
    </div>
    )
}

export default CountryDetails