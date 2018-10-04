import React, {Component} from 'react'
import paises from '../countries.json'

class CountryDetail extends Component{

   state={
       pais:{}
   }

   componentWillMount(){

   }

   render(){
       const {id} = this.props.match.params
       const pais = paises.find(p=>p.cca3===id)
       return(
           <div>
             <p>País: {pais.name?pais.name.common:''}</p>
             <p>Capital: {pais.name?pais.capital:''}</p>
             <p>Area: {pais.name?pais.name.area:''}</p>
           </div>
       )
   }
}

export default CountryDetail