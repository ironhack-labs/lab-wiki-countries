import React, { Component } from 'react';
import countryData from "../countries.json";
import { NavLink } from 'react-router-dom';
export default class CountryDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            countryData: countryData,
            singleCountry: {},
            borderArr : [],
        }
    }


   

    componentDidMount(){
        this.fetchTheData(this.props.match.params.theId);
    }



    shouldComponentUpdate(nextProps, nextState){
  

        if(nextProps.match.params.theId !==  this.props.match.params.theId ||
             this.state.singleCountry !== nextState.singleCountry){
                 
            this.fetchTheData(nextProps.match.params.theId);
            return true;
        } else{
            return false;
        }
    }


    fetchTheData(Search){
        
       
let aMatch;


let borderArr = [];
      
     this.state.countryData.forEach((code)=>{
        
         if(code.cca3 === Search){
             aMatch = code;

             
            }
            
        })
        
        
        
        for(let x = 0; x < aMatch.borders.length;x++){
         
            for(let i = 0; i < this.state.countryData.length; i++){
                if(aMatch.borders[x] === this.state.countryData[i].cca3){
                   borderArr.push(this.state.countryData[i])

                }
            }
        }
        this.setState({singleCountry: aMatch, borderArr:borderArr})
        
}

borderFinder(){
    return this.state.borderArr.map((borderCountry,i)=>{
        return <li key={i}> <NavLink exact to={"/CountryDetail/"+borderCountry.cca3} >{borderCountry.name.common}</NavLink></li>
    })
}





  render() {
    return (
    
          <div className="col-5 float-right">
              
              {this.state.singleCountry.name &&
            
            <h2>{this.state.singleCountry.name.common}</h2>
              }
              {this.state.singleCountry.capital &&
            <h3>{this.state.singleCountry.capital}</h3>
              }
              {this.state.singleCountry.capital &&
            <h4>{this.state.singleCountry.area}</h4>
            }
            <ul>
            {this.borderFinder()}
</ul>
        
               </div>

         
    
    );
  }
}

