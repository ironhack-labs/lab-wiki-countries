import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CountryDetails() {
const { id } = useParams()
const [countryDetails, setCountryDetails] = useState(null)
const navigate = useNavigate()
  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
    .then((response) => {
      setCountryDetails(response.data)
    })
    .catch(error => error)
  }, []);
  return (
    <div className="container">
      <div className="details">
                {countryDetails === null
                    ? <p>Loading country details...</p>
                    : <div>
                        <h1>{countryDetails.name.common}</h1>
                        <p>Capital: {countryDetails.capital}</p>
                        <p>Area: {countryDetails.area} m²</p>
                        {countryDetails.borders.length > 0 && <p>Borders:</p>}
                        <div className="container">
                        {countryDetails.borders.map((border) => {
                          return (
                                <Link className="link card" to={`/${border}`}>
                                    <p>{border}</p>
                                </Link>
                              )
                            })}
                            </div>
                            
                    </div>
                }
                <button onClick={() => {navigate(-1)}}>Back</button>
            </div>
          
  </div>
  );
}
export default CountryDetails;
