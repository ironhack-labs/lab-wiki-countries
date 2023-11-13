import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const { countryId } = useParams();

  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, {});
  return (
    <div>
      <h1>Country Details</h1>
      <h2>{country.name && country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km</p>

      <Link to="/">Back</Link>
    </div>
  );
}

export default CountryDetails;
