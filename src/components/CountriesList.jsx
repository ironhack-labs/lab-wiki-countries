import countriesList from '../countries.json';

// let countriesAlpha3Code = countriesList.filter((country) => country.alpha3Code);

export function CountriesList(props) {
  return (
    <div>
      {countriesList.map((code) => {
        return (
          <div>
            <a href={code.alpha3Code}>{code.name.common}</a>
          </div>
        );
      })}
    </div>
  );
}
