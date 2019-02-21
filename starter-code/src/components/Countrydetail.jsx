import React,{Component} from "react"
import Countries from "../countries.json";

const Details = (props) =>{
  console.log(props);


  return(
      <div>
          {Countries.map((country,index)=>{
              if(country.cca3 == props.match.params.id){

                  return(
                      <div key={index}>
                      <h1>{country.name.common}</h1>
                          <p>Capital: {country.capital[0]}</p>
                          <p>Area: {country.area} km²</p>
                          <p>{`${country.borders}`}</p>
                      </div>
                  )
              }
          })}
      </div>
  )
}

export default Details;
