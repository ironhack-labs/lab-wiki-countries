import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetails({ country }) {
  const { countryId } = useParams();

  /*const findCountry = (id) => {
    const newCountries = [...country];
    console.log(newCountries);

    const foundCountry = country.find((country) => country.id === id);
  };*/

  /*const findCountry = (id) => {
    return country.find((country) => country._id === id);
  };

  console.log(findCountry(country._id));
  const foundCountry = findCountry(country._id);
  console.log(foundCountry);*/

  const uniqueCountry = country.find(
    ({ alpha3Code }) => alpha3Code === countryId
  );

  return (
    <>
      {uniqueCountry && (
        <div className="container">
          <p> <b>Country Details</b></p>
          <h1>{uniqueCountry.name.common}</h1>

          <table className="table">
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{uniqueCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{uniqueCountry.area} km²</td>
              </tr>
              <tr>
                <td >Borders</td>
                <td >
                  <ul>
                    {uniqueCountry.borders.map((border) => {
                      return (
                        <Link key={border} to={`/${border}`}>
                          <li >{border}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
