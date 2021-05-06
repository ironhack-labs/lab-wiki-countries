import { Component } from 'react'
import Countries from './countries.json'
import { Link } from 'react-router-dom'
import CountryDetails from './CountryDetails'

class CountriesList extends Component {

    constructor() {
        super()
        this.state = {
            Countries: Countries,
            details: false
        }
    }

    showDetails() {
        this.setState({
            details: true
        })
    }


    render() {

        return (
            <section>

                {

                    this.state.Countries.map((elm, idx) =>

                        <div className='col-5' key={idx}>
                            <Link onClick={() => this.showDetails(idx)}>{elm.name.common}</Link>
                        </div>
                    )

                }
                {this.state.details ? <CountryDetails /> : null}

            </section>
        )
    }

}

export default CountriesList