
const CountriesList = ({ countries }) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {countries.map((country) => {
              return (
                <a
                  key={country.alpha3Code}
                  className="list-group-item list-group-item-action"
                  href={country.alpha3Code}
                >
                  <img
                    className="mb-3 mt-3"
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt=""
                    width={40}
                  />
                    {country.name.common}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
