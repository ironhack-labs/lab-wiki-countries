import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails() {
  const params = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    setCountry(null);
    fetch(
      ` https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setCountry(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.countryId]);

  return (
    <div>
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</h2>
      {/* <h3>{country.name.common}</h3> */}
      {/* <h3>{country.capital[0]}</h3>

      <h3>{country.borders[0]}</h3>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`}
        alt=""
        width={100}
      /> */}
    </div>
  );
}

export default CountryDetails;
