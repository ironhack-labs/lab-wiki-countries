import React from 'react'
import paises from '../countries.json';
import { Link } from 'react-router-dom';

export const Countries = props => {
    console.log(props);
    return (
        <div>
            <ul>{paises.map((pais,index)=>{
                return <Link className="list-group-item list-group-item-action" key={pais.cca3} to={pais.cca3}>{pais.flag}{pais.name.common}</Link>
            })}
            </ul>
        </div>
    )
}
