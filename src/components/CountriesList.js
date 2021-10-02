import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CountryDetails from './CountryDetails';

export const CountriesList = ({ countries }) => {
  return (
    <>
      {countries.map((country) => {
        return (
          <Switch>
            <CountriesList countries={countries} />
            <Route path={`/${country.cca3}`}>
              <CountryDetails country={country} />
            </Route>
          </Switch>
        );
      })}

      <div class="col-5">
        <div class="list-group">
          <Link class="list-group-item list-group-item-action" to="/ABW">
            🇦🇼 Aruba
          </Link>
          <Link class="list-group-item list-group-item-action" to="/AFG">
            🇦🇫 Afghanistan
          </Link>
          <Link class="list-group-item list-group-item-action" to="/AGO">
            🇦🇴 Angola
          </Link>
          <Link class="list-group-item list-group-item-action" to="/AIA">
            🇦🇮 Anguilla
          </Link>
          <Link class="list-group-item list-group-item-action" to="/ALA">
            🇦🇽 Åland Islands
          </Link>
          <Link class="list-group-item list-group-item-action" to="/ALB">
            🇦🇱 Albania
          </Link>
          <Link class="list-group-item list-group-item-action" to="/AND">
            🇦🇩 Andorra
          </Link>
          <Link class="list-group-item list-group-item-action" to="/ARE">
            🇦🇪 United Arab Emirates
          </Link>
          <Link class="list-group-item list-group-item-action" to="/ARG">
            🇦🇷 Argentina
          </Link>
          <Link class="list-group-item list-group-item-action" to="/ARM">
            🇦🇲 Armenia
          </Link>
          <Link class="list-group-item list-group-item-action" to="/ASM">
            🇦🇸 American Samoa
          </Link>
          <Link class="list-group-item list-group-item-action" to="/ATA">
            🇦🇶 Antarctica
          </Link>
          <Link class="list-group-item list-group-item-action" to="/FLK">
            🇫🇰 Falkland Islands
          </Link>
          <Link class="list-group-item list-group-item-action active" to="/FRA">
            🇫🇷 France
          </Link>
          <Link class="list-group-item list-group-item-action" to="/ZWE">
            🇿🇼 Zimbabwe
          </Link>
        </div>
      </div>
    </>
  );
};
