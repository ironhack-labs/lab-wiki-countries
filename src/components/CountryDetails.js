import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails(props) {
  const { countryId } = useParams();

  const foundCountry = props.countries.find((countryObj) => {
    return countryObj.alpha3Code === countryId;
  });

  return (
    <>
      {!foundCountry && (
        <div className="col-7">
          <h3>Project not found!</h3>
        </div>
      )}

      {foundCountry && (
        <div className="col-7">
        <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
                alt={foundCountry.alpha2Code}></img>
          <h1>{foundCountry.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((border, i) => {
                      let borderName = props.countries.find(function (
                        post,
                        index
                      ) {
                        if (post.alpha3Code === border) return true;
                      });
                      return (
                        <li key={i}>
                          <Link to={`/${borderName?.alpha3Code}`}>
                            {borderName?.name.official}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
