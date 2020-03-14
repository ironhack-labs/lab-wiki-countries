import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";

export const CountryDetail = () => {
  return (
    <>
      <div className="row">
        <div className="col-5">Column 5/12</div>
        <div className="list-group">
          {/*map para los paises
          <a href="#" className="list-group-item list-group-item-action active">
          Cras justo odio (active)
          </a>
          */}
        </div>
      </div>
      <div className="col-7">
        Column 7/12
        {/*
           <h1>France</h1>
           <table class="table">
             <thead></thead>
             <tbody>
               <tr>
                 <td style="width: 30%;">Capital</td>
                 <td>Paris</td>
               </tr>
               <tr>
                 <td>Area</td>
                 <td>
                   551695 km
                   <sup>2</sup>
                 </td>
               </tr>
               <tr>
                 <td>Borders</td>
                 <td>
                   <ul>
                     <li><a href="/AND">Andorra</a></li>
                     <li><a href="/BEL">Belgium</a></li>
                     <li><a href="/DEU">Germany</a></li>
                     <li><a href="/ITA">Italy</a></li>
                     <li><a href="/LUX">Luxembourg</a></li>
                     <li><a href="/MCO">Monaco</a></li>
                     <li><a href="/ESP">Spain</a></li>
                     <li><a href="/CHE">Switzerland</a></li>
                   </ul>
                 </td>
               </tr>
             </tbody>
           </table>
           */}
      </div>
    </>
  );
};
