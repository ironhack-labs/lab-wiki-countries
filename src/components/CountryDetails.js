import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const { countries } = props;
  const { countryId } = useParams();

  const [details, setDetails] = useState('');

  useEffect(() => {
    const countryDetails = countries.find(
      (country) => country.alpha3Code === countryId
    );
    setDetails(countryDetails);
  }, [countries, countryId]);

  // useEffect((result) => {
  //       setDetails(result.data)
  // }, [countryId]);

  return (
    <div className="col-7">
      {details && (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}
            alt={details.name.official}
          />
          <h1>{details.name.official} </h1>
          <div>Capital: {details.capital} </div>
          <div>Area: {details.area} </div>
          <div>
            Borders:
            {details.borders.map((code, index) => {
              return (
                <li key={index}>
                  <Link to={`/country/${code}`}>
                    {
                      countries.find((country) => country.alpha3Code === code)
                        .name.official
                    }
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
