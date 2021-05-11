import React from 'react';
import { Link } from 'react-router-dom';


function CountriesList(props) {
  const { countries } = props;
  return (
    <div className="countries-list">
      {countries.map((element) => {
        return (
          <Link className="link" key={element.cca3} to={`/${element.cca3}`}>
            <p className="cca2">{element.cca2}</p>
            {element.name.common}
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
