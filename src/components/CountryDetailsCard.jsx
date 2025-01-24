import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CountryDetailsCard({ country, allCountries }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const countryCodeLower = country.alpha2Code.toLowerCase();

  return (
    <div>
      <h3>Country details</h3>
      <img
        className="img-fluid my-4"
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryCodeLower}.png`}
        alt="flag"
      />
      <h4 className="text-primary fw-bolder">{country.name.official}</h4>
      <div className="container">
        <div className="row border-bottom">
          <div className="col">Capital</div>
          <div className="col">{country.capital}</div>
        </div>
        <div className="row border-bottom">
          <div className="col">Area</div>
          <div className="col">{country.area} km²</div>
        </div>
        <div className="row border-bottom">
          <div className="col">Borders</div>
          <div className="col">
            <ul className="list-unstyled d-flex flex-column">
              {country.borders.map((neighbor) => (
                <Link
                  className="text-decoration-none btn btn-outline-dark fw-semibold mt-2"
                  to={`/${neighbor}`}
                  key={neighbor}
                >
                  <li>{allCountries.filter((e) => e.alpha3Code === neighbor)[0].name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button className="btn btn-success my-3" onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default CountryDetailsCard;
