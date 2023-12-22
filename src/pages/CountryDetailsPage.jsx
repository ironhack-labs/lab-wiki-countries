import { Link, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
// import axios from "axios";
function CountryDetails() {
  const { countryId } = useParams();
  const apiUrl =
    "https://ih-countries-api.herokuapp.com/countries/" + countryId;
  const { response, error, loading } = useFetch(apiUrl);
  // const [countryDetail, setCountryDetail] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get(apiUrl)
  //     .then((resp) => setCountryDetail(resp.data))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, [apiUrl]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  return (
    <>
      <h1>Country Details</h1>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${response.alpha2Code.toLowerCase()}.png`}
      />
      <div key={response._id}>
        <p>Capital:{response.capital}</p>
        <p>Area:{response.area} km2</p>
        <p>Borders:</p>
        {response.borders &&
          response.borders.map((e) => (
            <ul className="list-group" key={e}>
              <Link className="list-group-item" to={"/" + e}>
                {e}
              </Link>
            </ul>
          ))}
      </div>
    </>
  );
}

export default CountryDetails;