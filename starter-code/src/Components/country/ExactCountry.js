import React from 'react';
import '../../App.css';
import countries from '../../countries.json'
import { Link } from 'react-router-dom';


function ExactCountry(props){


  const borders = (countryBorders)=>{

  
  
   return countryBorders.map((e)=>{
      return countries.filter((eachCountry)=>{
        return eachCountry.cca3 === e
      }).map((eachBorder, i)=>{
        console.log(eachBorder)
        return(
          <li key = {i}><Link activeclassname="active" exact to={`/countryInfo/${eachBorder.name.common}`}>{eachBorder.flag} {eachBorder.name.common}</Link></li>
        )
      })
        
      })
  
  }



  const displayCountry = () => {
    console.log("props in exact country ------------- ", props)
    let param = props.match.params.country;
    return countries.map((e,i)=>{
      if(e.name.common === param){
        return (
          <div key = {i} className="all-info">
          <h1>{e.name.common}</h1>
          <div id="capital">
          <h3>Capital</h3>
          <h3>{e.capital}</h3>
          </div>
          <div id="area">
          <h3>Area</h3>
          <h3>{e.area}km&sup2;</h3>
          </div>
          <div id="borders">
          <h3>Borders:</h3>
          <div className="list">
          {borders(e.borders)}
          </div>
          </div>
          </div>
        )
      }
    })
  }


      return (
        <div className="App">
         {displayCountry()}
        </div>
      );
    }


export default ExactCountry;
