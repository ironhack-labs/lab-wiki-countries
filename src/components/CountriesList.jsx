
import { Link } from 'react-router-dom';


const CountriesList = (props) => {
const {countriesArray} = props;
  
  return (
    <div className="list-group">
      <h1>Countries</h1>

      {countriesArray.map((country) => {
        return (
         
            <Link
              to={country.alpha3Code}
              className="list-group-item list-group-item-action"
              key={country.alpha3Code}>
              {country.name.common}

              <img src={`https://flagcdn.com/16x12/${country.alpha2Code.toLowerCase()}.png`} alt="country" />
              
            </Link>
          
     
       );
      })}
    </div>
  );
};
export default CountriesList;
