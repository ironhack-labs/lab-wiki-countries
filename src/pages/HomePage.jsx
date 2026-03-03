import { Link } from "react-router-dom";

function HomePage({ countries }) {
  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      <div className="list-group shadow-sm">
        {countries.map((country) => {
          return (
            <Link
              to={`/${country.cca3}`}
              key={country.cca3}
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <img
                src={country.flags.png}
                alt={country.name.common}
                width="30"
                className="me-3"
              />
              <span className="fw-semibold text-dark">
                {country.name.common}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
