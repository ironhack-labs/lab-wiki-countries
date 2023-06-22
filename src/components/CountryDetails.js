import { useParams, Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { alpha3Code } = useParams();

  const countryObj = props.callbackToGetCountry(alpha3Code);
  if (countryObj) return (
    <div className="col-7">
      <h1>{countryObj.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryObj.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryObj.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryObj.borders.map((border) => {
                    const countryFromBorder = props.callbackToGetCountry(border)
                  return <li key={border}>
                    <Link to={`/${border}`}>{countryFromBorder.name.common}</Link>
                  </li>;
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
