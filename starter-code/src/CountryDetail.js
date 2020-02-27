import React from "react";
import Borders from "./borders";

class CountryDetail extends React.Component{
    render(){
        console.log(this.props.borders)
        return(
      <div>
                      <h1>{this.props.name}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{this.props.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.props.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                      <ul>
                      
                    {/* {this.props.borders.map(border =>(
                     <Borders  border={border}></Borders>
                     ))} */}
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
              
           
        )
    }
}

export default CountryDetail