import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countryId } = useParams();

  let fromAPI;
  let array;
  {
    props.countriesFromAPI === undefined ? (fromAPI = false) : (fromAPI = true);
  }

  {
    fromAPI ? (array = props.countriesFromAPI) : (array = props.countriesList);
  }

  const filteredCountry = () => {
    return array.filter(
      (country) => country.alpha3Code === countryId
    );
  };
  const countryToDisplay = filteredCountry();
  console.log(countryToDisplay[0].name.common);
  const lowercaseAlpha2Code = countryToDisplay[0].alpha2Code.toLowerCase();

  return (
    <div>
      <h1>{countryToDisplay[0].name.common} </h1>
      <img
        src={
          'https://flagpedia.net/data/flags/icon/72x54/' +
          lowercaseAlpha2Code +
          '.png'
        }
      />
    </div>
  );
}

export default CountryDetails;
