import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const { alpha3 } = useParams();
  const [oneCountryData, setOneCountryData] = useState([]);

  //   console.log(alpha3);

  useEffect(() => {
    console.log("mount");
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3}`)
      .then((result) => {
        console.log(result.data);
        setOneCountryData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [alpha3]);

  return (
    <>
      <h1>Country Details</h1>
      {oneCountryData.length === 0 && <p>Loading Data..</p>}
      {oneCountryData.length !== 0 && (
        <div>
          <img
            src={` https://flagpedia.net/data/flags/icon/72x54/${oneCountryData.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <h4>{oneCountryData.name.common}</h4>
          <p>Capital: {oneCountryData.capital[0]}</p>
          <p>Area: {oneCountryData.area}km</p>
          <p>Borders:</p>
          {oneCountryData.borders.map((border) => {
            return (
              <Link key={border} to={`/${border}`}>
                <p> {border} </p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default CountryDetails;
