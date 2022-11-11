import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const urlAPIFlags='https://ih-countries-api.herokuapp.com/countries/'

export const CountryDetails = ({ countries }) => {
  const params = useParams();
  //const country = countries.filter((countryF) => countryF.alpha3Code===params.id);
  const [country, setCountry] = useState({});

  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch(urlAPIFlags + params.id);
      console.log(response);
      const data = await response.json();
      setCountry(data);
    }
    fetchCountry();
  }, [params.id]);

  if (!country.alpha2Code) {
    return <></>;
  }
  console.log(country.alpha2Code.toLowerCase());
   return (
     <>
       <img
         src={'https://flagpedia.net/data/flags/icon/128x96/' + country.alpha2Code.toLowerCase() +'.png'} alt={country.name.official}/>
       <h1>{country.name.official}</h1>
       <table className="table">
         <thead></thead>
         <tbody>
           <tr>
             <td className="capital">Capital</td>
             <td>{country.capital}</td>
           </tr>
           <tr>
             <td>Area</td>
             <td>
               {country.area} km<sup>2</sup>
             </td>
           </tr>
           <tr>
             <td>Borders</td>
             <td>
               <ul>
                 {country.borders.map((border) => {
                   return (
                     <li>
                       <Link
                         key={border}
                         to={'/' + border}
                         className="list-group-item list-group-item-action"
                       >
                         {
                           countries.find(
                             (findCountry) => border === findCountry.alpha3Code
                           ).name.common
                         }
                       </Link>
                     </li>
                   );
                 })}
               </ul>
             </td>
           </tr>
         </tbody>
       </table>
     </>
   );
};
