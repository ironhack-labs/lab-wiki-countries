import { Link } from 'react-router-dom';

function CountriesList(props) {
  //This component should render a list of Links, each having the country's alpha3Code embedded in the URL. Clicking on any of the Links should render the country details component.
  const { allCountries } = props;
  console.log(props);
  return (
    <div>
      {allCountries.map((eachCountry) => {
        return (
          <p>
            <Link
              key={eachCountry.name.common}
              to={`/country-details/${eachCountry.name.common}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                alt={eachCountry.name.common}
                height={'15px'}
              />{' '}
              {eachCountry.name.common}{' '}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default CountriesList;
