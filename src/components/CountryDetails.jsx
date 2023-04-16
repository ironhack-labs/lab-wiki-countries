import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from './Navbar';

function CountryDetails() {
  const params = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${params.id}`
      );

      const json = await response.json();

      setCountry(json);
    };

    fetcher();
  }, [params.id]);
  // ao final da primeira renderizacao, execute o conteudo da funcao de callback

  if (!country) return null;

  return (
    <div>
      <NavBar />
      <div className="mx-auto col-4">
        <img
          src={`https://flagpedia.net/data/flags/w1160/${country.alpha2Code.toLowerCase()}.webp`}
          alt="flags"
          width="220px"
        />
        <h1>{country.name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((border) => (
                    <Link
                      key={border}
                      className="list-group-item list-group-item-action"
                      to={`/countryDetails/${border}`}
                    >
                      {border}
                    </Link>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
