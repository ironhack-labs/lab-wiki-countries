import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CountriesDetails({ propCountries }) {
  let { alpha3Code } = useParams();
  const country = propCountries.find(
    (element) => element.alpha3Code == alpha3Code
  );

  let borders = [];
  country.borders.forEach((item) => {
    let borderName = propCountries.find(
      (element) => element.alpha3Code == item
    );
    borders.push(borderName.name.common);
  });
  console.log(borders);
  console.log(useParams());
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="container" style={{ width: '100%' }}>
            <div className="container">
              <img
                style={{ width: '150px' }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
              <h3>{country.name.common}</h3>
            </div>
            <div className="table" style={{ width: '100%' }}>
              <tbody>
                <tr scope="row">
                  <td>
                    <p>Capital</p>
                  </td>
                  <td>
                    <p>{country.capital[0]}</p>
                  </td>
                </tr>
                <tr scope="row">
                  <td>
                    <p>Area</p>
                  </td>
                  <td>
                    <p>{country.area} km2</p>
                  </td>
                </tr>

                <tr scope="row">
                  <td>
                    <p>Borders</p>
                  </td>
                  <td>
                    {country.borders.map((element, index) => {
                      return (
                        <p>
                          <Link to={`/${element}`}>{borders[index]}</Link>
                        </p>
                      );
                    })}{' '}
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesDetails;
