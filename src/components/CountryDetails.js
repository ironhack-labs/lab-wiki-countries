import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import countriesData from './../countries.json';

const CountryDetails = (props) => {
  const [filteredCountry, setFilteredCountry] = useState(null);

  const { countryId } = useParams();

  console.log('3digit country ---->', countryId);

  useEffect(() => {
    const foundCountry = countriesData.find((obj) => {
      return obj.alpha3Code === countryId;
    });

    if (foundCountry) {
      setFilteredCountry(foundCountry);
    }
  }, [countryId]);

  console.log('Country details ---->', filteredCountry);

  return (
    <div>
      <div className="col-7">
        {!filteredCountry && (
          <div>
            <h2>Country Not Found</h2>
          </div>
        )}

        {filteredCountry && (
          <>
            <h1>{filteredCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{filteredCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {filteredCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  {filteredCountry.borders.length === 0 ? (
                    <p>None</p>
                  ) : (
                    countriesData.map((count) => {
                      for (let item of filteredCountry.borders) {
                        if (count.alpha3Code === item) {
                          return (
                            <Link
                              key={count.name.common}
                              to={`/${count.alpha3Code}`}
                            >
                              <li>{count.name.common}</li>
                            </Link>
                          );
                        }
                      }
                    })
                  )}
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
