// src/components/IronbnbList.jsx
import { Link } from "react-router-dom";

function CountryList({ countries }) {
  return (
    <div
      className="col-6 align-items-center"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div
              key={country.alpha3Code}
              className="country-item list-group-item list-group-item-action list-group-item-warning"
            >
              <Link
                className="d-flex justify-content-start align-items-center"
                to={`/countries/${country.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.alpha3Code}
                />

                <h3>{country.name.common}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountryList;
