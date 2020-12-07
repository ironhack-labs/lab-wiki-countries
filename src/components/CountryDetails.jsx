import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  console.log(props);
  const { countries } = props;
  const ccn3 = props.match.params.ccn3;
  console.log('ccn3', ccn3);
  console.log('countries from details', countries);

  const country = countries.find((el) => el.ccn3 === ccn3);
  console.log('country: ', country);

  return (
    <>
      {/* <h1>test</h1> */}
      {/* <pre>{JSON.stringify(country.name, '\t', 2)}</pre> */}
       <div className="col-7">
     <h1> {`${country.name.official}`}</h1>
     <table className="table">
       <thead></thead>
       <tbody>
         <tr>
           <td style={{width: "30%"}}>Capital</td>
           <td>{`${country.capital[0]}`}</td>
         </tr>
         <tr>
           <td>Area</td>
           <td>{`${country.area}`} km
             <sup>2</sup>
           </td>
         </tr>
         <tr>
           <td>Borders</td>
           <td>
             <ul>
             {country.borders.map(el => {
                 return <li key={el}> <Link to={`${el}`}> {`${el}`} </Link> </li>
             }) }
             </ul>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
    </>
  );
};

export default CountryDetails;

// <div className="col-7">
//     <h1> {`${country.name.official}`}</h1>
//     <table className="table">
//       <thead></thead>
//       <tbody>
//         <tr>
//           <td style={{width: "30%"}}>Capital</td>
//           <td>{`${country.capital[0]}`}</td>
//         </tr>
//         <tr>
//           <td>Area</td>
//           <td>{`${country.area}`} km
//             <sup>2</sup>
//           </td>
//         </tr>
//         <tr>
//           <td>Borders</td>
//           <td>
//             <ul>
//             {country.borders.map(el => {
//                 return <li key={el}> <Link to={`${el}`}> {`${el}`} </Link> </li>
//             }) }
//             </ul>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
