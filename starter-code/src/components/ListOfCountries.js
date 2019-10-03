import React, { Component } from 'react'
import Countries from '../countries.json';
import { Link } from 'react-router-dom'


class ListOfCountries extends Component {


    getList = () => {
        let countryList = Countries.map((eachCountry, i)=>{
        return <Link className="list-group-item list-group-item-action" key ={i} to={'/' + eachCountry.cca3}>{eachCountry.flag} {eachCountry.name.official}</Link>
        })
        // component={() => <CountryDetail countryID={eachCountry.cca3}/>}
        return countryList;
    }
    
    
    
    render () {

        return (
            <div>
                {this.getList()}
            </div>
        )
    }
}

export default ListOfCountries