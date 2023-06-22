import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countriesArr.map((countryObj) => {
          return (
            <Link
              key={countryObj.alpha3Code}
              className="list-group-item list-group-item-action"
              href={`/${countryObj.alpha3Code}`}
            ><img src={`https://flagpedia.net/data/flags/icon/72x54/${countryObj.alpha2Code.toLowerCase()}.png`} alt={countryObj.alpha2Code} /> {`${countryObj.name.common}`}</Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
