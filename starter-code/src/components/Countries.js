import React from 'react'
import {Link} from 'react-router-dom'
import paises from '../countries.json'



const countries = ()=>{
    return(
       
        
          <div className="col-4" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group ">
                {paises.map((cadaPais, index)=>{
              return (
                    <div className= 'list-group-item '>
                      <Link 
                      key = {index}
                      to={`/pais/${cadaPais.cca3}`}
                      >
                      {`${cadaPais.flag}  ${cadaPais.name.common}`}
                      
                      </Link> 
                    </div>
              )  
            })}
            </div>
          </div>
       
     



        
    )
}

export default countries