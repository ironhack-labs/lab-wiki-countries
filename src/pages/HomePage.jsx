import { Link } from "react-router-dom";

function HomePage({ countries }) {
  return (
    <div className="container">
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group">
        {countries.map((country) => (
          <Link
            className="list-group-item list-group-item-action"
            key={country._id}
            to={`/${country.alpha3Code}`}
          >
            <h3>{country.name.common}</h3>
            <img
              key={country._id}
              className="country-img"
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
