import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const CountryParams = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = `https://ih-countries-api.herokuapp.com/countries/${CountryParams.countryId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in API:", error);
        setLoading(false);
      });
  }, [CountryParams.countryId]);
  return (
    <div className="d-flex justify-content-center mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="">
          <div className="card-body">
            <h5 className="card-title">Country Details</h5>
            <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${data.alpha2Code.toLowerCase()}.png`}
                alt={`Flag ${data.name.common}`}
              />
            <h2 className="card-subtitle mb-2 text-body-secondary">
              {data.name.official}
            </h2>
            <div className="d-flex flex-row justify-content-between ">
              <p className="mb-0 pb-0">Capital</p>
              <p className="mb-0 pb-0">{data.capital}</p>
            </div>
            <hr />
            <div className="d-flex flex-row justify-content-between ">
              <p className="mb-0 pb-0">Area</p>
              <p className="mb-0 pb-0">{data.area} km&sup2;</p>
            </div>
            <hr />
            <div className="d-flex flex-row justify-content-between ">
              <p className="mb-0 pb-0">Border</p>
              <ul>
                {data.borders.map((codeCountry, index) => (
                  <li key={`${index}${codeCountry}`}>
                    <Link to={`/${codeCountry}`} className="card-link">
                      {codeCountry}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
