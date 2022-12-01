import { NavLink, Outlet } from 'react-router-dom';

export default function CountriesList({ countries, loading }) {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {countries.map(({ alpha3Code, alpha2Code, name: { common } }) => (
              <NavLink
                key={alpha3Code}
                to={alpha3Code}
                state={countries}
                className={({ isActive }) =>
                  isActive
                    ? 'list-group-item list-group-item-action active'
                    : 'list-group-item list-group-item-action'
                }
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                  alt={alpha2Code}
                />{' '}
                <span className="ms-3">{common}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
