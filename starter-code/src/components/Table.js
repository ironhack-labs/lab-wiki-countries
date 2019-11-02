import React from 'react';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

const Table = props => {
  return (
    <table className={props.className} >
      <thead></thead>
      <tbody>
        <TableRow rowlabel="Capital" columns={[props.foundCountry.capital]} />
        <TableRow rowlabel="Area" columns={[`${props.foundCountry.area} km2`]} />
        <TableRow rowlabel="Borders" columns={[props.foundCountry.borders.length > 0 ? props.foundCountry.borders.map((border,i) => <li key={i}><Link to={border}>{border}</Link></li>) : <p>none</p>]} />
      </tbody>
    </table>
  )
}

export default Table;



