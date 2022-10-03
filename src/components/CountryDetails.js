import React from 'react';
import { useParams } from 'react-router-dom';
// import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  // console.log('props: ', props);

  let { name } = useParams();
  // console.log('alpha3Code: ', name);

  const clickedCountry = props.countries.filter((country) => {
    return country.alpha3Code === name;
  });

  // console.log('clickedCountry is: ', clickedCountry);

  // const borderCountry = props.countries.find((country) => {
  //   return country.alpha3Code === border;
  // });

  // function borderCountry(props, border) {
  //   props.countries.find((country) => {
  //     return country.alpha3Code === border;
  //   });
  // }

  // console.log('borderCountry is: ', borderCountry);

  // console.log('useParams: ', useParams());

  return (
    <div className="col-7 container-fluid w-auto p-3">
      <img
        className="img-fluid"
        src={`https://flagpedia.net/data/flags/icon/72x54/${clickedCountry[0].alpha2Code.toLowerCase()}.png`}
        alt="some dumb rag"
      ></img>
      <h1>{clickedCountry[0].name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{clickedCountry[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${clickedCountry[0].area} km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul style={{ listStyleType: 'none' }}>
                {/* {console.log(clickedCountry[0].borders)} */}
                {clickedCountry[0].borders
                  .map((border) => {
                    const country = props.countries.find((country) => {
                      return country.alpha3Code === border;
                    });
                    const name = country.name.common;
                    return { name, border };
                  })
                  .map(({ name, border }, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/${border}`}>{name}</Link>
                      </li>
                    );
                  })}
                {/* {clickedCountry[0].borders.map((border, index) => {
                  const country = borderCountry(props, border);
                  return (
                    <li key={index}>
                      <Link to={`/${border}`}>
                        {
                          props.countries.find((country) => {
                            return country.alpha3Code === border;
                          }).name.common
                        }
                      </Link>
                    </li>
                  );
                })} */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
