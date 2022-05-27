import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CountriesList(props) {
  const { countriesList } = props;
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    setAllCountries(countriesList);
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-5">
            <div class="list-group">
              {allCountries.map((country) => {
                return (
                  <Link
                    to={`/${country.alpha3Code}`}
                    className="list-group-item list-group-item-action"
                    href="/ABW"
                  >
                    {country.name.common}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;

/* style="max-height: 90vh; overflow: scroll" */
