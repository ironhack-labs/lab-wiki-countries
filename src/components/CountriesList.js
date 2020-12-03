import React from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {

    render() {
        return (
            <div>
                {this.props.countries.map((country, index) => {
                    return (
                        <div key={index}>
                            <Link className="list-group-item list-group-item-action" to={`/countrydetails/${country.cca3}`}>{`${country.flag} ${country.name.official}`}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default CountriesList;