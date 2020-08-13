import React from 'react';
import { Link } from 'react-router-dom';

const OneCountry = (props) => {
  const {flag, name} = props.country;

    return (
      <div>
        <Link className="list-group-item list-group-item-action" to={`/${props.country.cca3}`}> {flag} {name.common}</Link>
      </div>
    )
}
export default OneCountry;

//En esta parte montamos el link que abrirá el detalle de cada país.
//Para ello utilizamos Link, tanto en este componente como en app.js que es dónde hemos puesto la ruta que 