import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function CountryDetailsPage() {
  const [detailCountry, setDetailCountry] = useState();
  const { countryId } = useParams();
  const navigate = useNavigate();
  const countryDetailUrl = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;

  async function getDetails() {
    try {
      const response = await fetch(countryDetailUrl);
      const jsonResponse = await response.json();
      setDetailCountry(jsonResponse);
    } catch (error) {
      console.log("This is the error: ", error);
    }
  }
  

  useEffect(() => {
    getDetails();
  }, [countryId]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  console.log("This is the array: ", detailCountry);

  return (
    <div>
      <h2>Country Details</h2>
      {detailCountry ? (
        <article>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${detailCountry.alpha2Code.toLowerCase()}.png`}
            alt={`Flag of ${detailCountry.name.common}`}
          />
          <h3>{detailCountry.name.common}</h3>
          <p>Capital: {detailCountry.capital}</p>
          <p>Area: {detailCountry.area} km²</p>
          <p>Borders: </p>
          <ul>
            {detailCountry.borders.map((border, index) => (
              <Link to={`/countries/${border}`}><li key={index}>{border}</li></Link>
            ))}
          </ul>
        </article>
      ) : (
        <h3>Loading details...</h3>
      )}
      <button type="submit" onClick={handleSubmit}>
        Back
      </button>
    </div>
  );
}

export default CountryDetailsPage;
