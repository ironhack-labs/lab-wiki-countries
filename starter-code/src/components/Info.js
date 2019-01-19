import React, {Component} from 'react'
import data from '../countries.json';
import { NavLink } from "react-router-dom";
class Info extends Component {
    render() {
      return (
       <div>
     
       {data.map((e, index) => (
           e.cca3===this.props.match.params.id&&
       <div key={e.area} className="col-7">
            <h1>{e.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="width: 30%;">Capital</td>
                  <td>{e.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{e.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  <div className="list-group">
 
              {e.borders.map((e, index) => (
                <NavLink to={`/${e}`} key={e.name} className="list-group-item list-group-item-action">
                 {data.map((element,i) =>  element.cca3===e&& <p key={element.cca3}>{element.name.common}</p>)}
                </NavLink>
              ))}
</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
   
      )  )}</div>
  
      )
  }}
  
  export default Info;
