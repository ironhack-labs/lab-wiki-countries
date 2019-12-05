import React, {Component} from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
	state = {
		country: {}
	}

componentDidUpdate(prevProps) {
	if(this.props.location !== prevProps.location){
		this.onRouteChanged()
	}
}
onRouteChanged = () => {
	const country = countries.find(
		country => country.cca3 === this.props.match.params.cca3
	)
	this.setState({ country })
}  
     


	render(){
        const { country} = this.state
        return(
            <div>
               
                    <p>Capital:  {country.capital}</p>
                    <p>Area:    {country.area}</p>
                    <p>Borders:</p>
                    <ul>
                    {(
                         country && country.borders) ?country.borders.map ((country, i) => (
                             <Link key = { i } to={`/country/${country}`}>
                                 <li>
                                     {(countries.find(elem => elem.cca3 === country)).name.official }
                                 </li>
                             </Link>
                    )) : 
                   ''
                    } 
                     </ul>
            </div>
        ) 
	} 
}
