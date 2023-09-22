import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function CountryDetails({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { alpha3code } = useParams();
  const [error, setError] = useState(null);
  //const alpha3code=userParams().alpha3code

  // console.log("PARAMS", useParams(),alpha3code);

  const apiDetailUrl = `https://ih-countries-api.herokuapp.com/countries/${alpha3code}`;

  useEffect(() => {
    // console.log(alpha3code, "checking")
    const fetchData = async () => {
      const response = await axios.get(
        `${apiDetailUrl}/countries/${alpha3code}`
      );
    };

    axios
      .get(apiDetailUrl)
      .then((response) => {
        setSelectedCountry(response.data);
      })
      .catch((error) => setError(error));
  }, [alpha3code]);
  //alpha3code is changing -> re-render

  // if (!selectedCountry) {
  //   <h1>still loading... 🐌</h1>;
  // }

  // console.log("SELECT", selectedCountry);

  if (!countries || !selectedCountry) return <div>loading...</div>;
  return (
    <div className="col-12">
      {!selectedCountry && <p>Still loading... 🐌</p>}
      <h1 className="text-margin-country">Country Details</h1>

      {selectedCountry && (
        // While the data is being fetched, selectedCountry remains null.
        // If you tried to render content that depends on selectedCountry directly,
        // you might run into errors because selectedCountry doesn't have the expected data structure.
        // It is to avoid rendering content with potentially missing or invalid data.
        <div>
          <div className="col-55">
            <h3>{selectedCountry.name.common}</h3>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td stye={{ width: "40%" }}>Capital</td>
                  <td>{selectedCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {selectedCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {selectedCountry.borders.borderCode &&
                        selectedCountry.borders.map((borderCode) => {
                          const borderCountry = countries.find(
                            (country) => country.alpha3Code === borderCode
                            //selected Country's Bcode === country of countries array 중 코드랑 맞으면 가져오기 (find!)
                          );

                          // Check if borderCountry is undefined before rendering
                          // Skip rendering for this border
                          // if (!borderCountry) {
                          //   return null;
                          // }

                          console.log("BorderC", borderCountry);
                          return (
                            <li>
                              <Link
                                to={`/countries/${borderCountry.alpha3Code}`}
                              >
                                {borderCountry.name.common}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
