import 'bootstrap/dist/css/bootstrap.css';
import ClickableCountry from './ClickableCountry';

const CountryDetails = ({ alpha3Code, countriesList }) => {
  const getCountry = (alpha3Code) => {
    const { name, capital, area, borders } = countriesList.find(
      (country) => country.alpha3Code === alpha3Code
    );
    return { name, capital, area, borders };
  };

  const country = getCountry(alpha3Code);

  return (
    <section>
      <h1>{country.name}</h1>
      <hr />
      <div className="row">
        <div className="col-6">Capital</div>
        <div className="col-6">{country.capital}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">Area</div>
        <div className="col-6">
          {country.area} km<sup>2</sup>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-6">Borders</div>
        <div className="col-6">
          <ul>
            {country.borders.map((border) => {
              const borderCountry = getCountry(border);
              return (
                <ClickableCountry
                  key={border}
                  alpha3Code={border}
                  name={borderCountry.name}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
