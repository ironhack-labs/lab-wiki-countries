import React from 'react';
import { Link } from 'react-router-dom';



class CountriesList extends React.Component {
    render() {
        return (
            <div className="col-5">
                <div className="list-group">
                    {this.props.countries.map((country) => {
                        return (
                            <Link
                                to={`/${country.cca3}`}
                                className="list-group-item list-group-item-action"
                                key={country.ccn3}
                            >
                                {country.flag} {country.name.official}
                            </Link>
                        );
                    })}
                </div>
            </div>
        )
    }
}
export default CountriesList;
