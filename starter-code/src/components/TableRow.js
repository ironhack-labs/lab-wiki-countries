import React from 'react'

const TableRow = props => {
  return (
    <tr>
      <td>{props.rowlabel}</td>
      {props.columns.map((c,i) => <td key={i}>{c}</td>)}
    </tr>
  )
}

export default TableRow;
