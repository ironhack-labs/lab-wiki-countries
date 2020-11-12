// import React from 'react'
// // import jsonCL from "../countries.json"
// import { Link } from 'react-router-dom'


// const CountryDetails = (props) => {
//     // console.log(props.countires)
    
//     const countryId = props.match.params.id
//     // console.log(countryId)
//     const currentCountry = props.countries.find(field=>field.cca3===countryId)
//     // console.log(currentCountry)
//     return (
//         <div className="col-7">
//             <h1>{currentCountry.name.common}</h1>
//             <table className="table">
//               <thead></thead>                                                                          
//               <tbody>
//                 <tr>
//                   <td style={{"width":"30%"}}>Capital</td>
//                   <td>{currentCountry.capital}</td>
//                 </tr>
//                 <tr>
//                   <td>Area</td>
//                   <td>{currentCountry.area} km
//                     <sup>2</sup>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Borders</td>
//                   <td>
//                     <ul>
//                       {
//                         currentCountry.borders.map((border,index)=>{
//                           let cName = props.countries.find(field=>field.cca3===border)
//                           return <li key={index}><Link  to={"/"+border}>{cName.translations.spa.common}</Link></li>
//                         })
//                       }
//                       {/* <li><a href="/BEL">Belgium</a></li> */}
//                     </ul>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )
// }

// export default CountryDetails
import React from "react";
import { Link } from "react-router-dom";
const CountryDetails =(props)=> {
  // render() {
    const cca3 = props.match.params.cca3 || "AUS";
    const countries = props.countries;
    console.log(props.match)
    const country = countries.find(country => country.cca3 === cca3) || {};
    return (
      <div className="col-7">
        <h1>{ country.name && country.name.common }</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{ country.capital && country.capital[0] }</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  { country.borders &&
                    country.borders.map(cca3 => {
                      return (
                        <li key={cca3}>
                          <Link to={"/" + cca3}>
                            {
                              countries.find(country => country.cca3 === cca3)
                                .name.common
                            }
                          </Link>
                        </li>
                      );
                    })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
// }
export default CountryDetails;