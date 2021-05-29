import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


export const CountryDetails = () => {
  const { country } = useParams();
  console.log(country);

  const [pais, setPais] = useState(null);

  useEffect(() => {
    const data = () => {
      const paises = countries.filter((e) => {
        return e.cca3 === country;
      });
      setPais(paises[0]);
    };

    data();
  }, [country]);
  return (
    <>
      {pais === null ? (
        <h1>no hay datos</h1>
      ) : (
        <div>
          <h1>{pais.name.common}</h1>
          <hr />
          <div className="row">
            <div className="col-md-6">Capital:</div>

            <div className="col-md-6">{pais.capital[0]}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">Area:</div>

            <div className="col-md-6"> {pais.area} mts</div>
          </div>
          <hr />

          <div className="row">
            <div className="col-md-6">Border:</div>

            <div className="col-md-6">
              <ul>
                {pais.borders.map((e) => (
                  <Link to={`/${e}`}>
                    <div>
                      <li>{e}</li>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};