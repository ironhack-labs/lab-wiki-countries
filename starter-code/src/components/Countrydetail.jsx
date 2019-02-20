import React,{Component} from "react"
import Countries from "../countries.json";

const Details = (props) =>{
  console.log(props);


  return(
      <div>
          {Countries.map((country,idx)=>{
              if(country.cca3 == props.match.params.id){

                  return(
                      <div key={idx}>
                          <p>{country.capital[0]}</p>
                          <p>{country.area}</p>
                          <p>{country.borders}</p>
                      </div>
                  )
              }
          })}
      </div>
  )
}

export default Details;