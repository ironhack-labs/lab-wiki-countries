import React from 'react'
import {useParams, Link} from 'react-router-dom'

export default function CountryDetails (props) {
    const { code } = useParams()

    const myCountry = props.data.find((element)=>{
        return code === element.alpha3Code
    })

  return (
<div>
<div> {myCountry.name.official} </div> 
<div> {myCountry.capital[0]}</div>
</div>
    
  )
}
