import React from 'react';
import { Link } from 'react-router-dom';
import countries from './countries.json';

const CountryList = (props) => {
// JSON data is being passed as props into CountriesList component
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className='list-group'>
        {countries.map((EachCountry, index) => {
        // JSON data was saved into countries Array in app.js, so thats where we have to run map method on to.
          return (
                 <Link
                    key={EachCountry.cca3}
                    to={`/${EachCountry.cca3}`}
                    className="list-group-item list-group-item-action"
                    >
                    {EachCountry.name.official}
                </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountryList;

{/* <Link
key={EachCountry.cca3}
to={`/${EachCountry.cca3}`}
className="list-group-item list-group-item-action"
>
{EachCountry.flag}
{EachCountry.name.official}
</Link> */}