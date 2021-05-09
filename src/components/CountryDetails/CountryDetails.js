import { React } from 'react';
import { Link } from 'react-router-dom';
import countries from '../../countries.json';

export default function CountryDetails(props) {
  const { params } = props.match;
  console.log(params);

  return (
    <div>
      {countries
        .filter((el) => {
          return el.cca3 === params.cca;
        })
        .map((ca) => {
          return (
              <div  key="ca.cca2">
                <h1>{ca.name.common}</h1>
                <table className="table">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td style={{ width: '30%' }}>Capital</td>
                      <td>{ca.capital}</td>
                    </tr>
                    <tr>
                      <td>Area</td>
                      <td>
                        {ca.area} km
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Borders</td>
                      <td>
                        <ul>
                          {ca.borders.map((border) => {
                            const countriesFiltred = countries.filter(
                              (country) => {
                                return country.cca3 === border;
                              }
                            );
                            return countriesFiltred.map((el) => {
                              console.log(el);
                              return (
                                <Link to={`/${el.cca3}`} key="el.ca">
                                  <li>{el.name.common}</li>
                                </Link>
                              );
                            });
                          })}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          );
        })}
    </div>
  );
}
