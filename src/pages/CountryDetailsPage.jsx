import { useParams } from "react-router-dom";

function CountryDetails({ countries }) {
  const { countryId } = useParams();
  const country = countries?.find((c) => c.cca3 === countryId);

  if (!country) {
    return <p>Loading...</p>;
  }

  if (!country) {
    return (
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>
          Country not found
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <h1>{country.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Flag</td>
            <td>
              <img src={country.flags.png} />
            </td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Sigla</td>
            <td>{country.cca3}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Official Name</td>
            <td>{country.name.official}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Region</td>
            <td>{country.region}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
