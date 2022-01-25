import CountryLink from './CountryLink';

const CountriesList = ({ countries }) => {
  return (
    <div
      className="list-group px-2"
      style={{ height: 'calc(100vh - 88px)', overflow: 'auto' }}
    >
      {countries.map((country) => {
        return (
          <div
            className="list-group-item list-group-item-action"
            key={country.alpha3Code}
          >
            <CountryLink
              name={country.name.common}
              path={country.alpha3Code}
              flag={country.alpha2Code}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
