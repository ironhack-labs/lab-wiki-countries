import React, { Component } from 'react';


import './App.css';

import listOfCountryNames from './countries.json'

import {Link} from 'react-router-dom';

import { Switch, Route } from 'react-router-dom';

class AboutCountry extends Component{

    state = {

        exactInfo: listOfCountryNames,

        link : this.props.match.params.cca3
    }

    componentWillReceiveProps(props){

     this.setState({ link: props.match.params.cca3 }, () =>{
        
     })
    }

    showListOfBorders(country){

        let copyLink = this.state.link;

        console.log(copyLink)

        console.log(country)

        let listOfBorders = country.borders;

        return listOfBorders.map((eachBorder, Index) =>{
            console.log(eachBorder);
        return (
            
            <div key={Index}>
            
                <ul>
                    
                    <Link to = {"/"+eachBorder} > <li >{eachBorder} </li></Link>   

                </ul>
             
            </div>
        )
        })




    }
   

    render(){


        let copy = this.state.exactInfo;


        let theId = this.state.link;

        let countryToShow;


        copy.forEach((eachCountryObj) =>{

            if(eachCountryObj.cca3 ===  theId){
                countryToShow = eachCountryObj
            }


        })


       
     





        return(
            

            <div className="singleCountryInfo">
                <h1>{countryToShow.name.common}</h1>
                 <p>Capital  {countryToShow.capital}</p>
                <p>Area {countryToShow.area}</p>
                <p>Borders </p>
                {this.showListOfBorders(countryToShow)} 
                
            </div>


        )



    }





}


export default AboutCountry;

