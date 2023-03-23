import { NavLink } from 'react-router-dom';

function CountriesList(props) {
  console.log(props)
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((currentCountry) => {
          return (
            <NavLink key={currentCountry.name.common}
              className="list-group-item list-group-item-action"
              to={`/${currentCountry.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`}
                alt="countryFlag"
              />
              <p>
              {currentCountry.name.common}
              </p>
              
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
