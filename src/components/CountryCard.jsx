import { Link } from "react-router-dom";
function CountryCard({ country }) {
  const countryCodeLower = country.alpha2Code.toLowerCase();
  return (
    <Link className="text-decoration-none text-black" to={`/${country.alpha3Code}`}>
      <div className="container-sm border mt-1 rounded py-2 hover">
        <img
          className="img-fluid"
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryCodeLower}.png`}
          alt="flag"
          style={{ height: "1rem" }}
        />{" "}
        {country.name.official}
      </div>
    </Link>
  );
}

export default CountryCard;
