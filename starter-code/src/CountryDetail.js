import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import countries from "./countries"

export default class CountryDetail extends Component {
  
  render() {

  let id = this.props.match.params.id

  let countryId = countries.find(theCountry =>{
      return theCountry.cca3 === id
    })
    console.log(countryId.name.common)
    console.log(countryId.borders)




    // countryId.borders will be called borders below
    let borderMap = (borders) =>{
      console.log(borders)
      let borderCounts = [];
      if(borders.length === 0){
        return <div> No border countries </div> 
      }
       else{borders.forEach(border=>{
          countries.find(count=>{
            if(count.cca3 == border){
              borderCounts.push(count)
            }

          })
        })
        let a = borderCounts.map(eachOne=>{
          console.log(eachOne.name.common)
          return <li> {eachOne.name.common}</li>
        })
        return a
       }
    }

    



   
    



    return (      
      <div>
        <h1> {countryId.name.common}</h1>
        <h2> Capital: {countryId.capital} </h2 >
        <h2> Area: {countryId.area}</h2>
        <h2> Borders: <ul>{borderMap(countryId.borders)} </ul></h2>     
        
      </div>
    );
    }
  }