import { Component } from "react";
import list from "../countries.json"
import {NavLink} from 'react-router-dom'

class  CountriesDetails extends Component{
    
    state={
        name:'',
        borders:[],
        area:'',
        capital:'',
        cca3:''
    }

    componentDidMount(){

        const{name,capital,borders,area,cca3} = this.props.location.state
        this.setState({
            name:name,
            capital:capital,
            borders:borders,
            area:area,
            cca3:cca3
        })
    }
    att(){
        let{name,capital,borders,area,cca3} = this.props.location.state
         this.setState({
            name:name,
            capital:capital,
            borders:borders,
            area:area,
            cca3:cca3
        })
       return (
        <div className="container-details">
        <h1>{this.state.name}</h1> 
         <hr/>
        <p>Capital:  {this.state.capital}  </p>
        <hr/>
        <p>Area:       {this.state.area}km<sup>2</sup></p><hr/>
        <div className="border-countries">
            <p>Borders:</p>
            <ul>
            {this.state.borders.map((element,i)=>{
                let nameCountry = list.find(e=> e.cca3 === element)
                return (<li key={i}>{nameCountry.name.common}</li>)
            })}
            </ul>    
        </div>
        </div>
       )

    }
    render(){
    return(
        this.props.match.params.id===this.state.cca3 ?(<div className="container-details">
        <h1>{this.state.name}</h1> 
         <hr/>
        <p>Capital:  <span className="span-capital">{this.state.capital}</span>  </p>
        <hr/>
        <p>Area:       <span className="span-details">{this.state.area}km<sup>2</sup></span></p><hr/>
        <div className="border-countries">
            <p>Borders:</p>
            <ul>
            {this.state.borders.map((element,i)=>{
                let nameCountry = list.find(e=> e.cca3 === element)
                return (<li key={i}><a href="#">{nameCountry.name.common}</a></li>)
            })}
            </ul>    
        </div></div>):this.att()
        
        
        
        
    
    )}
}

export default CountriesDetails;