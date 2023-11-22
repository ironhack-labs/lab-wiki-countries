
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const HomePage = () => {
    const [countries, setCountries] = useState([])



    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')

            .then((country) => {
                console.log(country.data)
                setCountries(country.data)


            });
    }, []);



    return (

        <div className="container" style={{
            maxHeight: "90vh", overflow: "scroll"
        }}>
            <h1 style={{ fontSize: "24px" }}> WikiCountries: Your Guide to the World</h1 >

            <div className="list-group">
                {
                    countries.map((elm, _id) => {
                        return (
                            < Link to={`/${elm.alpha3Code}`}>{elm.name.common}</Link>

                        )
                    })
                }
                {/* <a className="list-group-item list-group-item-action" href="/AFG"
                >{elm.name.common}</a> */}


            </div>
        </div >

    )
}



export default HomePage