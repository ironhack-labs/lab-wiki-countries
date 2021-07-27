import React, { Component } from "react";
import countries from "../../countries.json"
import './Countrie.css';
import CountryDetails from "../CountryDetails";
import {Link} from "react-router-dom"

class CountriesList extends Component {

    state = {
        countrie: countries,
    }




    render() {

        return (<div>
            <ul style={{ overflow: "scroll", height: "100vh" }} className="ul-list">
                {this.state.countrie.map(element => {
                    return (<>

                        <li className="list-countrie">
                            <img src={`https://www.countryflags.io/${element.cca2}/flat/64.png`} />
                            <Link to = {`/${element.cca3}`}> {element.name.official} </Link>
                        </li>

                    </>
                    )
                })}
            </ul>
        </div>
        )
    }
}

export default CountriesList