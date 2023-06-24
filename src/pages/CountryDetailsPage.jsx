import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);
  let { countryId } = useParams();

  console.log("countryId", countryId);

  useEffect(() => {
    const p1 = axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => response.data);

    const p2 = axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => response.data);

    Promise.all([p1, p2])
      .then(function (values) {
        const [data1, data2] = values;

        // Replace cca3 with corresponsing full objects from data1: ['AFG', 'IRN] -> [ {...}, {...} ]
        data2.borders = data2.borders.map((b) => {
          return data1.find((el) => el.alpha3Code === b);
        });

        setCountryDetails(data2);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [countryId]);

  if (!countryDetails) return "loading";

  return (
    <>
      <h1>{countryDetails.name.common}</h1>
      <div>Capital: {countryDetails.capital}</div>
      <div>Area: {countryDetails.area} km2</div>

      <ul>
        Borders:{" "}
        {countryDetails.borders.map((border) => {
          return (
            <Link to={`/${border.alpha3Code}`}>
              <li>{border.name.common}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default CountryDetails;
