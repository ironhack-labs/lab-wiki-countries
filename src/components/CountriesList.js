import { Link } from "react-router-dom";

function CountriesList(props) {
    
      return (
        <div>

          <h2>List of Countries </h2>

          {props.fetching ? <h1>Loading</h1> : props.countries.map(element => {
            return (
              <div>
                <Link to={'/countrylist/' + element.alpha3Code}>
                  <img
                    src={'https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code?.toLowerCase() + '.png'}
                    alt="flag"/>
                  <p>Country: {element.name.common}</p>
                </Link>
              </div>
            );
          })}
        </div>
      );
    
}

export default CountriesList