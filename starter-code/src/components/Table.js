import React from 'react';
import TableRow from './TableRow';

const Table = props => {
  return (
    <table className={props.className} >
      <thead></thead>
      <tbody>
        <TableRow rowlabel="Capital" columns={[props.foundCountry.capital]} />
        <TableRow rowlabel="Area" columns={[props.foundCountry.area]} />
        <TableRow rowlabel="Borders" columns={[props.foundCountry.borders.length > 0 ? props.foundCountry.borders.map((border,i) => <li key={i}><a href={border}>{border}</a></li>) : <p>none</p>]} />
      </tbody>
    </table>
  )
}

export default Table;



