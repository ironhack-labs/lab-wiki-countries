import { Link } from 'react-router-dom';

function CountriesList(props) {
  console.log(props);
  return (
        <div
          className="col-5"
          style={{ maxHeight: 90 + 'vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {props.countriesArr.map((country) => {
              return (
                <Link to={`/${country.alpha3Code}`}>
                <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase()+ ".png"} alt="flag" />
                  {country.name.common}
                  
                </Link>
              );
            })}
          </div>
        </div>
  );
}

export default CountriesList;
