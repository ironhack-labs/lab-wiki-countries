import React from 'react';
import CountryFile from '../countries.json';
import { NavLink } from 'react-router-dom';


function CountryDetail(props) {
    const { params } = props.match;
    // console.log("props.match: ", props.match);

    const getCountry = idCountry => {
        return CountryFile.filter(Country => {
            // console.log(Country.cca3, idCountry);
            return Country.cca3 === idCountry
        });
    };
  

  const myCountry = getCountry(params.id)[0];
  console.log("return", myCountry);
    return (
    <div className="col-7">
      <h1>{myCountry.name.official}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{myCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {myCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                  {myCountry.borders.map((border, index) => (
                      <li key={`border-${index}`}>
                          <NavLink to={`/country/${border}`}>{border}</NavLink>
                      </li>
                  ))}
                    {/* <li>
                    <a href="/BEL">Belgium</a>
                    </li> */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
