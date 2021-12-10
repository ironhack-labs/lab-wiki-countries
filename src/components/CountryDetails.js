import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const { allCountries } = props;
  const { cca3 } = useParams();
  //Extraer la info necesaria del allcountries del paies clickeado
  const found = allCountries.find((pais) => pais.cca3 === cca3);
  //o si ocupamos un filter, habria q acceder al elemento con un indice
  // const found = allCountries.filter((pais) => pais.cca3 === cca3)[0];

  //Encontrar los objetos de cada border

  const bordersAllData = found.borders.map((cca3Borde) => {
    return allCountries.find((country) => country.cca3 === cca3Borde);
  });
  return (
    <div className="col-7">
      <h1>{found.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            {/* capital es un array, hay q acceder al primer elemento */}
            <td>{found.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {found.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {bordersAllData.map((borde, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={`/countries/${borde.cca3}`}
                      >{`${borde.flag} ${borde.name.common}`}</Link>
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
};

export default CountryDetails;
