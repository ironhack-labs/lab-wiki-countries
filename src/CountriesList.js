import { Component } from "react"
import './CountriesList.css'
import countries from "./countries.json"
import { Link } from 'react-router-dom'

class CountriesList extends Component {

    constructor() {

        super()
        this.state = {

            countries

        }
    }

    render() {


        return (
            <>


                <div className="col-5 styleCountry">
                    <div className="list-group">

                        {this.state.countries.map((elm, index) => {
                            return (
                                <Link to={`${elm.cca3}`} style={{ textDecoration: 'none' }} className="list-group-item list-group-item-action" key={index}> <img src={`https://www.countryflags.io/${elm.cca2}/flat/16.png`} alt={`flag of ${elm.name.common}`} /> {elm.name.common}
                                </Link>)
                        }
                        )}


                    </div>
                </div>

            </>

        )



    }


}



export default CountriesList;