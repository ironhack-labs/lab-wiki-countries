import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { alphaCode } = useParams();

  /* console.log(alphaCode);
  console.log(props.listOfCountries[0]); */

  const filteredCountry = props.listOfCountries.filter((element, index) => {
    return element.alpha3Code === alphaCode;
  });

  console.log(filteredCountry[0]);
  const flagURL = filteredCountry[0].alpha2Code.toLowerCase();

  const borderingCountries = props.listOfCountries.filter((element, index) => {
    return filteredCountry[0].borders.some((bordering) =>
      element.alpha3Code.includes(bordering)
    );
  });

  console.log(borderingCountries);

  return (
    <div className="col-7">
      <h1>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${flagURL}.png`}
          alt="flag"
        ></img>
        {filteredCountry[0].name.common}
      </h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{filteredCountry[0].capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {filteredCountry[0].area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borderingCountries.length > 0 ? (
                  borderingCountries.map((element, index) => {
                    return (
                      <li key={`bordering country ${index}`}>
                        <Link to={`/${element.alpha3Code}`}>
                          {element.name.official}
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <li>No bordering countries</li>
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
