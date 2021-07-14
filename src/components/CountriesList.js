import { Component } from "react"
import countries from "../countries.json"
import { Link } from 'react-router-dom'





class CountriesList extends Component {

    constructor() {
        super()
        this.state = { countries }
    }

    render() {

        return (

            <>


                <div class="container">
                    <div class="row">
                        <div class="col-5">
                            <div class="list-group">
                                {
                                    this.state.countries.map(elm =>
                                        <Link to={`/${elm.cca3}`} style={{ textDecoration: 'none' }}>
                                            {elm.flag} {elm.name.common}
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>





            </>
        )
    }
}

export default CountriesList