import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList() {
  return (
    <div className="container">
      <div className='row'>
        <div className="col-5" style={{maxHeight: "90vh", overFlow: 'scroll'}}>
                <div className="list-group">
                  <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                </div>
        </div>
      </div>
  </div>

  )
}
