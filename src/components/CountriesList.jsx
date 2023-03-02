import { Link } from 'react-router-dom';

function CountriesList(props) {
  //This component should render a list of Links, each having the country's alpha3Code embedded in the URL. Clicking on any of the Links should render the country details component.
  const { allCountries } = props;
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {allCountries.map((eachCountry) => {
          return (
            <Link
              key={eachCountry.name.common}
              to={`/country-details/${eachCountry.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                alt={eachCountry.name.common}
                height="15px"
              />{' '}
              {eachCountry.name.common}{' '}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
