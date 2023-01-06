import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  return (
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
        {countries.map(({name, alpha2Code, alpha3Code}) => {
          return (
            <Link className="list-group-item list-group-item-action" to={`/${alpha3Code}`} key={alpha3Code}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                alt={alpha2Code}/>
              {name.common}
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default CountriesList;