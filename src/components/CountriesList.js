import React from 'react'
import {Link} from 'react-router-dom'

class CountriesList extends React.Component {

    render() {
        return (
            <div className="list-group">
                <ul>
                    {this.props.data.map(country => {
                        
                        return (
                            <li key={country.cca3}> 
                                <Link to={`/countryDetails/${country.cca3}`}>{country.name.official}</Link> 
                            </li> 
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default CountriesList;