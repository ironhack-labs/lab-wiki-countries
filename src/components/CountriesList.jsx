import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;

  return (
    <div className='col-5' style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <div className='list-group'>
        {countries.map((el) => (
          <Link 
            className='list-group-item list-group-item-action' 
            key={el.cca3} 
            to={`/${el.cca3}`}
          >
            <span>{el.cca2}</span>
            <span> {el.name.common}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CountriesList;
