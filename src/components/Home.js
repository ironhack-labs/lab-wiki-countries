import { Component } from "react"
import CountriesList from './CountriesList'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: this.props.countries
        }
    }

    render() {
    return (
        <div>
            <h1>Take me home, country roads</h1>
            <CountriesList countries={this.state.countries}/>
        </div>
    )
    }
}

export default Home