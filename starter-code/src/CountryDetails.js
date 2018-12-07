import React, { Component } from 'react';
import listOfCountryNames from './countries.json'
import {Link} from 'react-router-dom';


class CountryDetails extends Component{

    state = {
        exactInfo: listOfCountryNames,
        // Nick creates a variable here for props/params, 
        //  |   // I just use this.props.match.params directly - both work
        //  V
        // code : this.props.match.params.countryCode
    }  //   |
    //      |
    //      |
    //      |___________________________________________________________ 
    //                                                                 |
    // add in a LifeCycle Component as a Function:-->                  |
    //                                                                 |                                            
    // componentWillReceiveProps(theMagicalProps){                     |
    //      this.setState({code: theMagicalProps.match.params.id})     |
    //                       ^                                         | 
    // }                     |_________________________________________|


    showListOfBorders(country){
        let listOfBorders = country.borders;

        return listOfBorders.map((eachBorder, Index) =>{
        return (
            <div key={Index}>
                <ul>
                    <Link to = {eachBorder}> 
                        <li>{eachBorder}</li>
                    </Link>   
                </ul>
            </div>
        )
        })
    }
   
    render(){

        const theCountry = this.state.exactInfo.find((oneCountry)=>{
            return oneCountry.cca3 === this.props.match.params.id  
                                       //  |
                                       //  V
                                       // this is where nick would call his variable and instead write this.state.code
        })

        return(
            <div className="singleCountryInfo col-7">
                <h1>{theCountry.name.common}</h1>
                    <p>Capital  {theCountry.capital[0]}</p>
                    <p>Area {theCountry.area}</p>
                    <p>Borders </p>
                        {this.showListOfBorders(theCountry)}   
            </div>
        )
    }
}


export default CountryDetails;