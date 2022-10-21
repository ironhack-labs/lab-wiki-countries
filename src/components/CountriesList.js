
import { Link } from 'react-router-dom';


function CountriesList({countriesList}) {
  

  return (
          <div className="col-5" >
            <div className="list-group">
      {countriesList.map((country, index) => {
        return (
          <div key= {index}>
            <Link to={`/${country.alpha3Code}`} > {country.name.common} </Link>

          </div>
        );
      })}
    </div>
    </div>
  );
}
export default CountriesList;
