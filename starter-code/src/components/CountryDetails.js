import React, { Component } from 'react';
import {countries} from "./CountryList";

 const CountryDetails = props => {
     const name = props.match.params.name;
    console.log(name)

     const foundCountries = countries.find(el => {
         return el.name.common === name; 
     }); 
       console.log(foundCountries) 

     return (
         <div>

        <h1>{foundCountries.name.common}</h1>
<table>
<tbody>
<th>
   <tr>Capital</tr>
   <tr>Area</tr>
   <tr>Borders</tr>
 </th>
 <th>
   <tr>{foundCountries.capital}</tr>
   <tr>{foundCountries.area}</tr>
   <tr>{foundCountries.border}</tr>
 </th>
 </tbody>
</table>
         </div>
        // <div class="row">
        // <div class="col-3">{countries.capital}</div>
        // <div class="col-3">{countries.area}</div>
        // <div class="col-3">{countries.border}</div>
        // </div>

     )
 }

export default CountryDetails; 


// const ProjectDetails = props => {
//   const id = props.match.params.id;

//   const foundProject = myProjects.find(el => {
//     //   if (el.id === id) return true
//     return el.id === id;
//   });

//   return (
//     <div>
//       <h2>
//         {foundProject.name}{" "}
//         <span style={{ fontSize: "14px" }}>{foundProject.year}</span>
//       </h2>
//       <h3>Used technologies: {foundProject.technologies}</h3>
//       <p>{foundProject.description}</p>
//       {/* <Link to="/projects">Back</Link> */}
//     </div>
//   );
// };

// export default ProjectDetails;