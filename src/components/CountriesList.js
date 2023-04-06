import { Link } from 'react-router-dom';
function CountriesList({ countries }) {
  return (
    <>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group ">
          {countries.map((country) => (
            <Link
              key={country.name.common}
              rel="stylesheet"
              to={`/countries/${country.alpha3Code}`}
              className="list-group-item list-group-item-action d-flex align-items-center "
            >
              <img
                style={{ width: '20px', marginRight: '5px' }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={'Flag of ' + country.name.common}
              />
              {country.name.common}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CountriesList;
