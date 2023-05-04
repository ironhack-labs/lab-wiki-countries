import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const { alpha3code } = useParams();

  //   console.log('holi estos son los use params:', useParams());

  useEffect(() => {
    const country = props.countries.find((selCountry) => {
      //   console.log('esto es el sel country:', selCountry);
      return selCountry.alpha3Code === alpha3code;
    });
    // console.log('esto es el sel country:', country);
    if (country) {
      setSelectedCountry(country);
    }
  }, [alpha3code]);

  //   console.log('esto es el selectedcountry de verdad:', selectedCountry);

  return (
    <div className="col-7">
      {!selectedCountry && <h3>Country not found!</h3>}

      {selectedCountry && (
        <div>
          <h1>{selectedCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                {/* <td>{selectedCountry.name.capital}</td> */}
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {/* {selectedCountry.name.area} */}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      <a href="/AND">Andorra</a>
                    </li>
                    <li>
                      <a href="/BEL">Belgium</a>
                    </li>
                    <li>
                      <a href="/DEU">Germany</a>
                    </li>
                    <li>
                      <a href="/ITA">Italy</a>
                    </li>
                    <li>
                      <a href="/LUX">Luxembourg</a>
                    </li>
                    <li>
                      <a href="/MCO">Monaco</a>
                    </li>
                    <li>
                      <a href="/ESP">Spain</a>
                    </li>
                    <li>
                      <a href="/CHE">Switzerland</a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
