// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import axios from "axios";


// function CountryDetails() {
//     const {countryId} = useParams()

//     const [countryDetails, setCountryDetails] = useState({});

//     useEffect(() => {
//         axios.get("https://ih-countries-api.herokuapp.com/countries/" + countryId)
//             .then( response => {
//                 setCountryDetails(response.data)
//             })
//             .catch( e => {
//                 console.log("error getting coutries details from API", e)
//             })
//     }, [])



//     return(
//         <div className="container">
//         <p style="font-size: 24px; font-weight: bold">Country Details</p>

//         <h1>{countryDetails.name}</h1>

//         <table className="table">
//           <thead></thead>
//           <tbody>
//             <tr>
//               <td style="width: 30%">Capital</td>
//               <td>{countryDetails.capital}</td>
//             </tr>
//             <tr>
//               <td>Area</td>
//               <td>
//                 {countryDetails.area}
//                 <sup>2</sup>
//               </td>
//             </tr>
//             <tr>
//               <td>Borders</td>
//               <td>
//                 <ul>
//                 <Link to={`${countryId}`}>{countryDetails.name}</Link>
//                 </ul>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
        
//     )
// }

// export default CountryDetailsPage;

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function CountryDetails() {
    const { countryId } = useParams()

    const [countryDetails, setCountryDetails] = useState({});

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries/" + countryId)
            .then(response => {
                setCountryDetails(response.data)
            })
            .catch(e => {
                console.log("error getting countries details from API", e)
            })
    }, [])

    return (
        <div className="container">
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>

            <h1>{countryDetails.name}</h1>

            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td>{countryDetails.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {countryDetails.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                <li>
                                    <Link to={`${countryId}`}>{countryDetails.name}</Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails;
