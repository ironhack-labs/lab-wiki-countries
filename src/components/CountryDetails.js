import React, {useState,useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import { Route } from 'react-router-dom';
import CountriesList from './CountriesList';

function CountryDetails(props) {
  const [state, setState] = useState({
    name: '',
    capital: '',
    area: '',
    borders: '',
  });

  useEffect(() => {
    console.log(props);

    CountriesList.forEach((country) => {
      if (country.id === props.match.params.country) {
        setState(country);
      }
    });
  }, [props]);
  return (
    <Route>
      <div>
        <div class="col-7">
          <h1>{state.name}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{state.capiital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {state.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      <a href="/AND">{state.borders}</a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Route>
  );
}

export default CountryDetails;
