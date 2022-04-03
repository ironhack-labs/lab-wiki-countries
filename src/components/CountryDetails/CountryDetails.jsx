import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getCountry } from "../../services/api";
import { getBorders } from "../../services/api";
import { Link } from "react-router-dom";


const getAllBorderCountries = async (borders) => {
  const borderCountries = await getBorders(borders)

  return borderCountries
}


export const CountryDetails = () => {

  const { alpha3Code } = useParams()
  const { isLoading: countryIsLoading, isError, data: country, error } = useQuery(["country", alpha3Code], getCountry);
  const borders = country?.borders

  const { isLoading: borderIsLoading, data: borderCountries } = useQuery(
    ["borders", borders],
    getAllBorderCountries,
    { enabled: !!borders }
  );

  if (countryIsLoading || borderIsLoading)
    return (
      <div className="spinner-border text-primary mt-4" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="col-7">
      <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} className="mt-4" alt="" />
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          {
            country.borders.length ?
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {
                      borderCountries.map(
                        country =>
                          <li key={country.data._id}>
                            <Link to={`/countries/${country.data.alpha3Code}`} >{country.data.name.common}</Link>
                          </li>
                      )
                    }
                  </ul>
                </td>
              </tr> : ""
          }
        </tbody>
      </table>
    </div>
  );
}

