import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import countries from './countries.json'
import Borders from './Borders'



export default class Details extends Component {


    RenderingCountry = () => {
    let singleNation = this.props.match.params.id
    let allnations = this.props.data

    let selectedNation =  allnations.filter(function(nation) {
      return nation.cca3 == singleNation 
    })

    let display =  selectedNation.map((mynation, i)=> {
      return (
        <div key ={i}>
         <div class="col-7">
             <h1>{mynation.name.common}</h1>
             <table class="table">
               <thead></thead>
               <tbody>
                 <tr>
                   <td>{mynation.capital}</td>

                 </tr>
                 <tr>
                   <td>Area</td>
                   <td>{mynation.area} km
                     <sup>2</sup>
                   </td>
                 </tr>
                 <tr>
                   <td>Borders</td>
                   <td>
                       <Borders allcountries={this.props.data} data={mynation.borders}/>               
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      )
    })
    return display
  }


  render() {
    // console.log(this.props.match.params.id)
    // console.log(this.props.data)

    return (
      <div>
          {this.RenderingCountry()}
      </div>
    )
  }
}
