import React from 'react';
import {  Link } from 'react-router-dom';

export default function CountriesList(props) {
  //  console.log(props.data)
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
      {props.data.map(item => {
            return <Link className="list-group-item list-group-item-action" to={item.cca3} key={item.name.official}>{item.flag}{item.name.official}</Link>
      })}

      </div>
    </div>
  );
}

