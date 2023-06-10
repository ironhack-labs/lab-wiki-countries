import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/countries.context';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetails from './CountryDetails';
// import data from "../countries.json"

// function CountriesList() {
//   const CountriesList = (()=> {
//     const {theseCountries}=useContext(CountriesContext)
//   });

//   // const [countries, setCountries] = useState(data);

//   return (
//     <>
//         {theseCountries
//           .map((elem) => {
//                 return <Link to="/"> {elem.alpha3Code} </Link>
//               }
//               )}

//         {countries
//           .map((elem) => {
//                 return <Link to="/"> {elem.alpha3Code} </Link>
//               }
//               )}
//     </>
//   )
// }

function CountriesList() {
  //setting up the params
  const { alpha3Code } = useParams();

  //setting up these countries which display data from axios call
  const { theseCountries } = useContext(CountriesContext);

  const getImage = (code) => {
    return `https://flagpedia.net/data/flags/icon/72x54/${code.toLowerCase()}.png`;
  };

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {console.log()};
      <CountryDetails />
      <div className="list-group">
        {theseCountries.map((country) => {
          return (
            <Link to={`/${country.alpha3Code}`}>
              <img src={getImage(country.alpha2Code)} alt="country" />
              <br />
              <p>{country.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
