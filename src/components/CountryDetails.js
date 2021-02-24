import 'bootstrap/dist/css/bootstrap.css';
import ClickableCountry from './ClickableCountry';

const CountryDetails = ({ countryCca3, countriesList }) => {
  const getCountry = (cca3) => {
    const { name, capital, area, borders } = countriesList.find(
      (country) => country.cca3 === cca3
    );
    return { name: name.official, capital: capital[0], area, borders };
  };

  const country = getCountry(countryCca3);

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
                  cca3={border}
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
