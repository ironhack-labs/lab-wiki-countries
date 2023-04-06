import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const renderList = (countries) => {
    return (
      <section>
        {countries.map((country) => {
          return (
            <div key={country.alpha3Code} className="list-group">
              <Link
                className="list-group-item list-group-item-action"
                to={'/' + country.alpha3Code}
              >
                {country.name.common}
                <img
                  className=" w-auto h-50 ms-3"
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                />
              </Link>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <>
      {props.countries ? (
        renderList(props.countries)
      ) : (
        <section>
          <p>loading …</p>
        </section>
      )}
    </>
  );
};

export default CountriesList;
