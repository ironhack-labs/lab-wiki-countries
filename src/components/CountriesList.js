

import { Component } from "react"
import countries from "../countries.json"
import { Link } from "react-router-dom"

console.log(countries)

class CountriesList extends Component {

    constructor() {
        super()
        this.state = { countries }
    }

    render() {

        return (

            <div className="container" >
                <h2>Listado de paises</h2>
                {this.state.countries.map(elm =>
                    < div className="col-4 border">
                        <Link to={`${elm.cca3}`} >
                            {elm.name.official}  </Link>

                    </div>

                )
                }

            </div >
        )
    }
}

export default CountriesList
