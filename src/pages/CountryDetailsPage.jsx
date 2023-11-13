import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function CountryDetails() {
  const { countryId } = useParams();
  console.log(countryId);

  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        console.log(response.data);
        setCountryDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [countryId]);

  return (
    <>
      <h1>Country Details</h1>
      
      {countryDetails === null 
      ? <p>Loading.....</p>
      : (
      <>
      <h1>{countryDetails.name.common}</h1>
      
      <table className="table">

          <thead></thead>
          <tbody>

            <tr>
              <td>Capital</td>
              <td>{countryDetails.capital[0]}</td>
            </tr>

            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area} km
                <sup>2</sup>
              </td>
            </tr>

            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {countryDetails.borders.map((borderCountry, i) =>{
                        return(
                            <li key={i}><Link to={`/${borderCountry}`}>{borderCountry}</Link></li>
                        )
                    })}
                </ul>
              </td>
            </tr>

          </tbody>
        </table>
        </>
      )
      }
      
    </>
  );
}

export default CountryDetails;
