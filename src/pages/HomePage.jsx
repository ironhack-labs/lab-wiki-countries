import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { countriesList } from "../services/countries-service";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    countriesList()
      .then((countries) => {
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">
        WikiCountries: Your Guide to the World
      </h1>
      {loading ? (
        <BarLoader />
      ) : (
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-center">
              <th>Flag</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              const flagURL = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;

              return (
                <tr key={country.name.common}>
                  <td className="text-center">
                    <Link
                      to={`/countries/${country.alpha3Code}`}
                      className="text-decoration-none text-dark"
                    >
                      <img src={flagURL} alt={country.name.common} width="80" />
                    </Link>
                  </td>
                  <td className="text-center">
                    <Link
                      to={`/countries/${country.alpha3Code}`}
                      className="text-decoration-none text-dark"
                    >
                      {country.name.common}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HomePage;
