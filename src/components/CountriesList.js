import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  return (
    <div>
      <h3>CountriesList</h3>

      {props.data.map((element) => {
        return (
          <div key={element.alpha3Code} className="countries">
            {element.name.official}
            <br/>
            <Link to={`/${element.alpha3Code}`}> Link </Link>
            <hr/>
          </div>
        );
      })}
    </div>
  );
}
