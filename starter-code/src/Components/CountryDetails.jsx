import React from 'react';
import { NavLink } from 'react-router-dom';

class CountryDetails extends React.Component {

    constructor(props){
        super(props);
   
    }


getCountryDetail(){
     console.log(this.props.match.params.id)
    let listCountry = this.props.list
    let theId = this.props.match.params.id

    let singleCountry = listCountry.find(theCountry =>{
        return theCountry.cca2 === theId
    })
    console.log("YOUR COUNTRY IS")
    // console.log(singleCountry)
    return singleCountry;
}



getBorder(countryArray){
    let totalList = this.props.list

    return countryArray.map((eachBorder => {
        let theCountry = totalList.find(country =>{
            return country.cca2 === eachBorder || country.cca3 === eachBorder
        })
        console.log("THE COUNTRY BORDER IS")
    console.log(theCountry);
    return(
        <li class="borderList-item"><NavLink to={`/${theCountry.cca2}`}>{theCountry.name.common}</NavLink></li>
    )
    }))
   
// console.log(theCountry.name.common);
}

    render(){
        const theCountry = this.getCountryDetail();

        console.log(theCountry);
        console.log(theCountry.name.common)
        return(
            <span className="countryDetailContainer">
            
            <h1>{theCountry.name.common}</h1>
           
            <div class="container">
            <div class="row">
            <div class="col-5 itemDetailCap">Capital</div>
            <div class="col-5 itemDetailCap">{theCountry.capital}</div>
            <div class="w-100"></div>
            <div class="col-5 itemDetail">Area</div>
            <div class="col-5 itemDetail">{theCountry.area} km<sup>2</sup></div>
            <span class="col-5 borderDetail">Borders</span>
            <span>{this.getBorder(theCountry.borders)}</span>
            </div>
            </div>
            </span>
        )
    }
}

export default CountryDetails;