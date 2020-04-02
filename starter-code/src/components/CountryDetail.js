import React from "react";
import { Link } from "react-router-dom";

export const CountryDetail = (props) => {
  const data = (props.data.location.data) && props.data.location.data[props.data.location.index]
  if (!data) {return null} 
  return (
    <div className="col-7">
      <h1>{data.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{data.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {data.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {data.borders.map((e,i)=> <Link to={{pathname:'/'+e, 'data':props.data.location.data,index:props.data.location.data.findIndex(i => i.cca3 === e)}} className={`list-group-item list-group-item-action`} key={i}>{props.data.location.data[props.data.location.data.findIndex(i => i.cca3 === e)].name.common}</Link>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
