import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const [filteredCountry, setFilteredCountry] = useState(null);

  //console.log('this is info from the props --->', props.countries);

  const { countries } = props;
  const { countryId } = useParams();

  console.log('3digit country ---->', countryId);

  useEffect(() => {
    const foundCountry = countries.find((obj) => {
      return obj.alpha3Code === countryId;
    });

    if (foundCountry) {
      setFilteredCountry(foundCountry);
    }
  }, [countryId, countries]);

  console.log('Country details ---->', filteredCountry);

  return (
    <div>
      <div className="col-7">
        {!filteredCountry ? (
          <div>
            <h2>Country Not Found</h2>
          </div>
        ) : (
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
                  <td>
                    {filteredCountry.borders.length === 0 ? (
                      <p>None</p>
                    ) : (
                      countries.map((count) => {
                        for (let item of filteredCountry.borders) {
                          if (count.alpha3Code === item) {
                            return (
                              <li key={count.name.common}>
                                <Link to={`/${count.alpha3Code}`}>
                                  {count.name.common}
                                </Link>
                              </li>
                            );
                          }
                        }
                      })
                    )}
                  </td>
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
