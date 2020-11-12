import React from "react";
import { Link } from 'react-router-dom';
import Countries from '../countries.json';

 const CountriesList = () => {
    return (
        <div>
          <h2>Countries</h2>
          {Countries.map((eachCountrie, index) => {
            return (
              <div key={eachCountrie.cca3}>
              <span>{eachCountrie.flag}</span>
                <h3><Link to={`/countries/${eachCountrie.cca3}`}>{eachCountrie.cca3}</Link></h3>
                <hr />
              </div>
            );
          })}
        </div>
      );
}
export default CountriesList;
