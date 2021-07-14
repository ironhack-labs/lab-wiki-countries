import { Component } from "react"
import countries from '../countries.json'
import CountriesBox from "./CountriesBox"


class CountriesList extends Component {

    constructor() {
        super()
        this.state = { countries }
    }

    render() {

        return (
            <>
                <div className="col-5" >
                    <div className="list-group" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                        {this.state.countries.map(elm => <CountriesBox key={elm.cca3} {...elm} />)}
                    </div>
                </div>
            </>

        )
    }
}

export default CountriesList