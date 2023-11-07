import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { countryId } = useParams();

  console.log("countryId", countryId);

  useEffect(() => {
    // Make the first API request to get all countries
    axios.get("https://ih-countries-api.herokuapp.com/countries", function (response1) {
      const data1 = response1.data;

      // Make the second API request to get details of the selected country
      axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`, function (response2) {
        const data2 = response2.data;

        // Replace cca3 (country codes alpha3) with corresponding full objects from data1: ['AFG', 'IRN] -> [ {...}, {...} ]
        // Create a new array by mapping elements of data2.borders
        data2.borders = data2.borders.map((border) => {
        // For each 'border' (a country code) in data2.borders, try to find a matching element in data1
        return data1.find((element) => element.alpha3Code === border);
        // The find method returns the first element from data1 where alpha3Code matches the 'border'
        // If no match is found, find returns 'undefined'
        // So, data2.borders will contain a corresponding object from data1 or 'undefined' for each 'border'
});

// After the mapping is complete, data2.borders will be updated with the new array


        setCountryDetails(data2);
      });
    });
  }, [countryId]);

  if(!countryDetails) {
    return <p>loading</p>
  }

  return (
    <>
        <div>
          <h1>{countryDetails.name.common}</h1>
          <img src="src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}"/>
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
        </div>
    </>
  );
}

export default CountryDetails;
