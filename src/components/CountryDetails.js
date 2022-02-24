import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  let countryAlpha3code = useParams();

  const chosenCountry = props.countries.filter((country) => {
    return country.alpha3Code === countryAlpha3code.id;
  });

  return (
    <div className="col-7">
      <h1>{chosenCountry[0].name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{chosenCountry[0].capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {chosenCountry[0].area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {chosenCountry[0].borders.map((country, index) => {
                  return (
                    <li key={index}>
                      <a href={country}> {country}</a>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
