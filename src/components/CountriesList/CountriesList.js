import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
    return (
      <ul className="list-group col-6 p-5">
        {countries.map((country) => {
          return (
            <Link
              key={country._id}
              to={country.alpha3Code}
              className="ps-4 p-3 list-group-item d-flex align-items-center justify-content-start list-group-item-action text-decoration-none"
            >
              <img
                style={{ width: "9%" }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              <p className="ps-3 mb-0">
                {country.name.common}
              </p>
            </Link>
  
          )
        })}
      </ul>
    );
  };
  
  export default CountriesList;

// export default function CountriesList () {
//     const [countries, setCountries] = useState([])
   
//     useEffect(() => {
// 		fetchContries().then((countriesFetched) => {
//             setCountries(countriesFetched.data);
// 		});
// 	}, []);
//     console.log(countries);
      
//     return (
//         <div>
//             { 
//                 countries.length ? countries.map((country) => {
//                     return (
//                         <div key={country._id}>
//                             <h2>{country.name.common}</h2>
//                             <p>{country.capital}</p>
//                             <p>{country.area}</p>
//                             {country.borders.length ? (
//                                 <div>
//                                     <ul>
//                                         {country.borders.map((border, index) => {
//                                             return (<li key={index}>{border}</li>)
//                                         })}
//                                     </ul>
//                                 </div>
//                             ) : ""}
//                         </div>
//                     )})
//                     :
//                     <p> loading countries ...</p>
//             }
//         </div>
//     )
// }
