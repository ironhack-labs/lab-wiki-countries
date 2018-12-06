import React, { Component } from 'react';


import './App.css';

import listOfCountryNames from './countries.json'

import {Link} from 'react-router-dom';

class ListOfCountries extends Component{



// listOfCountryNames[0].name.common

    state = {
    
        countryNames : listOfCountryNames

    }

    showMeNames(){

        return (
            this.state.countryNames.map((eachObject, Index) =>{
                return (
                   <Link to = {eachObject.cca3} key={Index}> <div className="eachNameDiv" > {eachObject.name.common} </div></Link>
                )
            })
        )


    }


    render(){
        
        return(

            <div className="ListOfCountries">
                {this.showMeNames()}
            </div>
        )
    }

}








export default ListOfCountries;