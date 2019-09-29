import React from 'react';
import { NavLink } from 'react-router-dom';

class CountryDetails extends React.Component {

getCountryDetail(){
    let listCountry = this.props.list
    let theId = this.props.match.params.id

    let singleCountry = listCountry.find(theCountry =>{
        return theCountry.cca2 === theId
    })
    return singleCountry;
}



getBorder(countryArray){
    let totalList = this.props.list

    return countryArray.map((eachBorder => {
        let theCountry = totalList.find(country =>{
            return country.cca2 === eachBorder || country.cca3 === eachBorder
        })

    return(
        <li className="borderList-item" key={theCountry.cca2}><NavLink to={`/${theCountry.cca2}`}>{theCountry.name.common}</NavLink></li>
    )
    }))
   

}

    render(){
        const theCountry = this.getCountryDetail();

        return(
            <span className="countryDetailContainer">
            
            <h1>{theCountry.name.common}</h1>
           
            <div className="container">
            <div className="row">
            <div className="col-5 itemDetailCap">Capital</div>
            <div className="col-5 itemDetailCap">{theCountry.capital}</div>
            <div className="w-100"></div>
            <div className="col-5 itemDetail">Area</div>
            <div className="col-5 itemDetail">{theCountry.area} km<sup>2</sup></div>
            <span className="col-5 borderDetail">Borders</span>
            <span>{this.getBorder(theCountry.borders)}</span>
            </div>
            </div>
            </span>
        )
    }
}

export default CountryDetails;