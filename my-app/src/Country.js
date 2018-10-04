import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({oneCountry}) => {
  return (
    <div>
      <li>
       <Link to={`/${oneCountry.cca3}`} className="list-group-item list-group-item-action">
          <img src={oneCountry.flag} width="30px" alt={oneCountry.name.common}/>
          {oneCountry.name.common}
       </Link>
      </li>
    </div>
  )
}

export default Country;