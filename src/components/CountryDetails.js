import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountriesList from "./CountriesList";

function CountryDetails(props) {

    const {id} = useParams()

     const [details, setDetails] = useState([]);
     const [fetching, setFetching] = useState(true);

     useEffect(()=> {
       fetchCountry()
     },[id])

     const fetchCountry = () => {
       setFetching(true)
       axios
         .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
         .then(response => {
           setDetails(response.data)
           setFetching(false)
         })
         .catch(e => console.log('error getting country details...', e));
     };

     return (
       <>
         <div>
           {fetchingCList ? (<h1>Loading</h1>) : (<CountriesList countries={countries} />)}
         </div>
         <div>
           {fetching ? (<h1>Loading</h1>) : (
             <>
               <img
                 src={'https://flagpedia.net/data/flags/icon/72x54/' + details.alpha2Code?.toLowerCase() + '.png'}
                 alt="flag"
               />

               <h1>{details.name.common}</h1>
               <table className="table">
                 <thead></thead>
                 <tbody>
                   <tr>
                     <td style={{ width: '30%' }}>Capital</td>
                     <td>{details.capital}</td>
                   </tr>
                   <tr>
                     <td>Area</td>
                     <td>
                       {details.area} km
                       <sup>2</sup>
                     </td>
                   </tr>
                   <tr>
                     <td>Borders</td>
                     <td>
                       <ul>
                         {details.borders?.map((border, id) => (
                           <Link
                             className="list-group-item list-group-item-action"
                             key={id}
                             to={'/' + border}>
                             {countries.filter(country => country.alpha3Code === border)[0]?.name.common}
                           </Link>
                         ))}
                       </ul>
                     </td>
                   </tr>
                 </tbody>
               </table>
             </>
           )}
         </div>
       </>
     );
}


export default CountryDetails

