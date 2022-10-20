
import { Link } from 'react-router-dom';


function CountriesList({countriesList}) {
  

  return (
    <div>
      {countriesList.map((country, index) => {
        return (
          <div key= {index}>
            <Link to={`/${country.alpha3Code}`} > {country.name.common} </Link>

          </div>
        );
      })}
    </div>
  );
}
export default CountriesList;
