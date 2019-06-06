import React, { Component } from 'react'
import Countries from '../countries.json'
import { Link }  from  'react-router-dom'

class countriesList extends Component {
  constructor(props){
    super(props)
    this.state = {
      Countries
    }
  }
  render(){
    return(
      this.state.Countries.map((country, idx)=>{
        return <Link to={`/${country.cca3}`} key={idx} className="list-group-item list-group-item-action ">{country.name.common}</Link>
      })
       
      
      
    )
  }
}

export default countriesList 
