import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
      });
  }, [countryId]);

  if (!country) return <div>Loading</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Country Details <br /> {country.name.common} <br />
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt={`${country.name.common} flag`}
          className="inline mr-2"
          width={75}
        />
      </h1>
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="border px-4 py-2">Capital</td>
            <td className="border px-4 py-2">{country.capital}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Area</td>
            <td className="border px-4 py-2">
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Borders</td>
            <td className="border px-4 py-2">
              <ul>
                {country.borders.length > 0 ? (
                  country.borders.map((border) => (
                    <li key={border}>
                      <Link className="text-blue-600" to={`/${border}`}>
                        {border}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No Borders</li>
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
