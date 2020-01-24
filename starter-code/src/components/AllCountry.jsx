import React from 'react';
import { Link } from 'react-router-dom';

const AllCountry = ({ image, name, cca3 }) => {
  return (
    <div>
      <Link to={`${cca3}`}>
        {image}
        {name}
      </Link>
    </div>
  )
}

export default AllCountry;