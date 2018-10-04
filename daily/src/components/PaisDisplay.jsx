import React from 'react'


const PaisDisplay= (props)=>{

  const {info} = props
  
  return(
    <div>
      {info.map((e,i) => (
        <div key={i}>
          <h2>{e.name.official}</h2>
          <h3>{e.capital}</h3>
          <h4>{e.area}</h4>
        </div>
      ))}
      
    </div>
  )
}



export default PaisDisplay