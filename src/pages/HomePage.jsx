// import axios from "axios";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
function HomePage() {
  // const [countries, setCountries] = useState([]);
  const apiUrl = "https://ih-countries-api.herokuapp.com/countries";
  const { response, error, loading } = useFetch(apiUrl);
  // useEffect(() => {
  //   axios
  //     .get(apiUrl)
  //     .then((response) => setCountries(response.data))
  //     .catch((err) => console.error(err));
  // }, []);
  // console.log(countries);
  const sortCountries = [...response].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
  if (error) {
    return <div>error..</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      {sortCountries.map((e) => (
        <ul key={e._id} className="list-group">
          <Link to={"/" + e.alpha3Code} className="list-group-item ">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}
            />
            {e.name.common}
          </Link>
        </ul>
      ))}
    </>
  );
}

export default HomePage;