import React, {Component} from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';



class Borders extends Component {
    constructor(props) {
        super(props);
        console.log(props)

    }
    render() {
        
        const oneCountry  =   countries.filter(country => country.cca3 === this.props.match.params.cca3)[0]       
            // console.log(oneCountry)
        
            return (
            <div>
            <Link to={`/${oneCountry.cca3}`}>{oneCountry}</Link> 

            </div>

        )
    }
}






export default Borders;