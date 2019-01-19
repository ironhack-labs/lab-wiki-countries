import React, {Component} from 'react'
class Info extends Component {
    render() {
      return (
    //    <div>
     
    //    {this.props.data.map((e, index) => (
    //        e.cca3===this.props.match.params.id&&
    //    <div className="col-7">
    //         <h1>{e.name.common}</h1>
    //         <table class="table">
    //           <thead></thead>
    //           <tbody>
    //             <tr>
    //               <td styleName="width: 30%;">Capital</td>
    //               <td>{e.name.common}</td>
    //             </tr>
    //             <tr>
    //               <td>Area</td>
    //               <td>{e.area} km
    //                 <sup>2</sup>
    //               </td>
    //             </tr>
    //             <tr>
    //               <td>Borders</td>
    //               <td>
    //               <div className="list-group">
    //           {this.props.data.map((e, index) => (
    //             <NavLink to={`/${e.cca3}`} key={index} className="list-group-item list-group-item-action">
    //              {e.name.common}
    //             </NavLink>
    //           ))}







    //                 <ul>
    //                   <li><a href="/AND">Andorra</a></li>
    //                   <li><a href="/BEL">Belgium</a></li>
    //                   <li><a href="/DEU">Germany</a></li>
    //                   <li><a href="/ITA">Italy</a></li>
    //                   <li><a href="/LUX">Luxembourg</a></li>
    //                   <li><a href="/MCO">Monaco</a></li>
    //                   <li><a href="/ESP">Spain</a></li>
    //                   <li><a href="/CHE">Switzerland</a></li>
    //                 </ul>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
   
    //   )  )}</div>
    <p>{this.props.match.params.id}</p>
      )
  }}
  
  export default Info;
