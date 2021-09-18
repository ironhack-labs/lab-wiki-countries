import React ,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./CountriesDetailes.css"

function CountriesDetails(props){
    
  const [country , setCountry] = useState({
    name: '',
    area: '',
    capital: [],
    borders: [],
  });
    
  useEffect(()=>{

    const result = props.countries.find(
      (countryObj)=> countryObj.cca3 === props.match.params.cca3
    );

    if(result){
      const {name, capital, area, borders} = result
      setCountry({
        name: name.common,
        capital: [...capital],
        area: area,
        borders: [...borders]
      })
      
    }

  },[props]);


function renderBorders(){
  if(country.borders){
    const bordersResult = country.borders.map((elem,index)=>{           
      return (
      <li key= {`${elem}-${index}`} >
        <Link to={`/${elem}`} > {getCountryNamebyCode(elem)}</Link>
      </li>
      )
    })
  return bordersResult;
  }
}

function getCountryNamebyCode(cca3){
  const getCountry = props.countries.find((elem) => elem.cca3===cca3)
  return getCountry.name.common;
}

if(country){
    return(
      <div>
      <h1>{country.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className = "td-capital" >Capital</td>
            <td>{country.capital.map((capitalStr)=><li key={capitalStr}>{capitalStr}</li>)}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {renderBorders()}   
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  }

// return <div>{renderCountries()}</div>
}

export default CountriesDetails;