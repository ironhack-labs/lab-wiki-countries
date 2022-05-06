import { Link } from 'react-router-dom';

function CountriesList(props) {

    const { countriesArray } = props;

    return (
      <div className="list-group">
        {countriesArray.map(countryElement => {
          return (
          <Link 
            to={countryElement.alpha3Code}
            className="list-group-item list-group-item-action"
            key={countryElement.alpha3Code}
          >
            {countryElement.name.common}
            <img style ={{ marginLeft: '1rem' }} src={`https://flagcdn.com/16x12/${countryElement.alpha2Code.toLowerCase()}.png`} alt="country" />
          </Link>
          )
        })}
      </div>
    );
}

export default CountriesList;