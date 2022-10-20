import {Link} from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5 countries-list">
        {props.countries.map(country => {
        return (
            <div className="list-group">
            <Link className="list-group-item list-group-item-action" to='/{country.alpha3Code}'>
            {country.name.common}
            </Link>
            </div>   
        )

    })}
    </div>
  );
}
export default CountriesList;
