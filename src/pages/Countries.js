import { Link, Outlet } from 'react-router-dom';

const Countries = ({ allCountries }) => {
  return (
    <div
      className="container-fluid"
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <div className="col-5" style={{ maxHeight: '50vh', overflow: 'scroll' }}>
        <h1>Countries list</h1>
        <div className="list-group">
          {allCountries.map((country) => (
            <Link
              key={country.cca3}
              to={`/countries/${country.cca3}`}
            >{`${country.flag}   ${country.name.common}`}</Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Countries;