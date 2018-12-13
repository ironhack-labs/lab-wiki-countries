import React,{Component} from 'react'
 import {Link} from 'react-router-dom'


 class CountryDetail extends Component{
   
   

     componentWillMount() {
       const {countries} = this.props.location.state;
       this.setState( {
         countries 
       });
     }
     
   

   render(){
     let country = this.state.countries.filter(c => {
       return c.cca3 == this.props.match.params.id;
     });
  
     return(
       
       
     )
   }
 }

 export default CountryDetail