import { Route, Routes, NavLink, Link } from 'react-router-dom';

export const CountriesList = (props) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countriesArr.map((country) => {
          return (
            <Link
              className="d-grid gap-3 d-flex align-items-center justify-content-start"
              style={{ height: '10vh' }}
              to={`/${country.alpha3Code}`}
            >
              <img
                className="col-2 d-flex align-items-center mx-1"
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                style={{ maxHeight: '10vh' }}
                alt={`${country.name.common}`}
              />
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
