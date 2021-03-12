import React from 'react'
import { Link } from 'react-router-dom'


class CountriesList extends React.Component {

    render() {

        const countries = this.props.countries

        return (

            <ul class="list-group">
                {countries.map((country, i) => {
                    return (
                        <Link to={`/countries/${country.cca3}`} key={i}>
                            <p >{country.flag} </p>
                            <p >{country.name.official} </p>
                        </Link>
                    )

                }

                )}

            </ul>

        )

    }

}


export default CountriesList;

