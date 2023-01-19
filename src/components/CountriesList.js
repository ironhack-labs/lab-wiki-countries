import { Link, NavLink, Routes, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';
function CountriesList(props) {
    const baseURL = 'https://ih-countries-api.herokuapp.com'
    console.log(props);
    console.log('DB' + props.countriesList)
    console.log( 'API' + props.countriesFromAPI)
    let fromAPI;
    let array;

  {
    props.countriesFromAPI === undefined ? (fromAPI = false) : (fromAPI = true);
  }

   {fromAPI ?  array = props.countriesFromAPI : array = props.countriesList} 
    
    
    
    return (
        <>
            <Routes>
            <Route path={baseURL + '/countries/:countryId'} element={<CountryDetails />}></Route> 
            </Routes>
            
      {array.map((countryDetails) => {
        return (
          <div key={countryDetails.name.common}>
                <h1>{countryDetails.name.common} </h1>
                {fromAPI
                    ? <Link to={countryDetails.alpha3Code }>More  API Details</Link>
                    : <Link to={'/countries/' + countryDetails.alpha3Code}>More Details</Link> }
          </div>
        );
      })}
    </>
  );
}
export default CountriesList;
