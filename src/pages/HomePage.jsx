import { Link } from "react-router-dom";

function HomePage({ countries }) {
  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      {countries.map((country) => (
        <Link key={country._id} to={`/country/${country.alpha3Code}`}>
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
  );
}

export default HomePage;
