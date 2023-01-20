import countries from "../countries.json"
import { useParams, Link } from 'react-router-dom'
import { useState,
 } from "react";
 import { useEffect } from "react";

function CountryDetails (props){

    const { id } = useParams();
    console.log('alpha3Code -->', id);
    const [selectedCountry , setSelectedCountry] =useState("")

const filteredCountry = props.countries.filter((country)=>{
    return country.alpha3Code === id
})    

useEffect (() => {
setSelectedCountry(filteredCountry)
},[])



    return (

<div className="col-7">
{selectedCountry ? ( <div>
{console.log("the selected country", selectedCountry)}
 <h1>{selectedCountry[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{selectedCountry[0].capital[0]}</td>
                </tr>
                <tr>
                  <td>{selectedCountry[0].area}</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
              <tr>
                  <td>Borders:</td>
                  <td>
                    <ul>
                     {selectedCountry[0].borders.map(border=>{
                        return (
                            <li> {border} </li>
                        )
                     })}
                   
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
</div> ): null }
           
          </div>
    )
}

export default CountryDetails;