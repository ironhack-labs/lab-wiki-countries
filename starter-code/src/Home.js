import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import countries from './countries.json'


//Home is now wrapped in Switch statement so it's props are full of cool stuff that we can use 
class Home extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }

    showCountries = () => {

        let links = countries.map(eachCountry => { //Loop thru countries.json and create dynamic links 
            return <li><Link to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></li>})
        return links
    }


    render() {
        return (
            <div>
                Home Page
                {this.showCountries()}
            </div>
        );
    }
}

export default Home;
