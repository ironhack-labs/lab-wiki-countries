import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails(props) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const { alpha3code } = useParams();
  //   console.log('holi estos son los use params:', useParams());

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3code}`)
      .then((res) => {
        setSelectedCountry(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [alpha3code]);

  /* useEffect(() => {
    const country = props.countries.find((selCountry) => {
      return selCountry.alpha3Code === alpha3code;
    });
    if (country) {
      setSelectedCountry(country);
    }
  }, [alpha3code]); */

  //   console.log('esto es el selectedcountry de verdad:', selectedCountry);

  if (!selectedCountry) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="col-7">
      {/* {!selectedCountry && <h3>Country not found!</h3>} */}

      {selectedCountry && (
        <>
          <div className="col-7">
            <h1>{selectedCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{selectedCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {selectedCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {selectedCountry.borders.map((borderCountryCode) => {
                        const borderCountry = props.countries.find(
                          (country) => country.alpha3Code === borderCountryCode
                        );
                        return (
                          <li>
                            <Link to={`/details/${borderCountry.alpha3Code}`}>
                              {borderCountry.name.common}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
