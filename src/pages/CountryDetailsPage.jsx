import React, { useEffect, useState } from "react";
import { countryDetail } from "../services/countries-service";
import { countriesList } from "../services/countries-service";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

const CountryDetail = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const { alpha3Code } = useParams();

  useEffect(() => {
    countryDetail(alpha3Code)
      .then((countryData) => {
        setCountry(countryData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [alpha3Code]);

  const flagURL = country.alpha2Code
    ? `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
    : "";

  return (
    <div className="container">
      {loading ? (
        <BarLoader color="#007BFF" loading={loading} />
      ) : (
        <>
          <h2 className="mt-3">Country Detail</h2>
          <div className="row mt-3">
            <div className="col-md-12">
              <img src={flagURL} alt={country.name.common} width="125" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-8">
              {country.name && <h1>{country.name.common}</h1>}
              <table className="table">
                <tbody>
                  <tr>
                    <th>Capital</th>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <th>Area</th>
                    <td>{country.area} km²</td>
                  </tr>
                  <tr>
                    <th>Borders</th>
                    <td>
                      <ul className="list-unstyled">
                        {country.borders?.map((border) => {
                          return (
                            <li key={border.alpha3Code}>
                              <Link to={`/countries/${border.alpha3Code}`}>
                                {border}
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
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetail;
