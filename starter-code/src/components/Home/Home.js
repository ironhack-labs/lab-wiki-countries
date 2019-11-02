import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({ countries }) => {
  return (
    <div className="col-5 home-country-list" >
      <div className="list-group">
        {
          countries.map((country) => {
            return <Link 
              className="list-group-item list-group-item-action"
              key={country.cca3}
              to={`/${country.cca3}`}
              >
              {country.name.common}
            </Link>
          })
        }      
      </div>
    </div>
  );
}

export default Home;
