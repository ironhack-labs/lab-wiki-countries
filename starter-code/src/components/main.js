import React from "react";
import { Link } from 'react-router-dom';

function Main(props){
  return(
    <>
      {props.countries.length > 0 ?
        <div> 
            <div className="list-group" style={{maxHeight: "90vh", overflow: "scroll"}}>
                    {props.countries.map(country=>(
                        <Link className="list-group-item list-group-item-action" to={`/detail/${country.cca3}`}>{country.name.common}</Link>
                    ))}
            </div>
              
          </div> : <h1>Loading</h1>          
      }
    </>
  )
}

export default Main;