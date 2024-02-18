import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        console.log(response);
        setCountry(response.data);
      });
  }, []);

  return (
    <>
      {country ? (
        <div>
          <div>Name: {country.name.common}</div>
          <div>Capital: {country.capital}</div>
          <div>
            Area: {country.area}
            <sup>2</sup>{" "}
          </div>
          Borders:
          <ul>
            {country.borders.map((border, index) => {
              return (
                <li className="border" key={index}>
                  {border}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default CountryDetails;
