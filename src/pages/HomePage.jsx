import { useEffect, useState } from "react"

import axios from "axios"

import { Link } from "react-router-dom"

function HomePage() {

    const [countries, setCountries] = useState()


    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(responseFromApi => setCountries(responseFromApi.data))
            .catch(err => console.log(err))

    }, [])

    return (
        countries
            ?
            <>
                <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                    <h1 style={{ fontSize: 45 }}>WikiCountries: Your Guide to the World</h1>
                </div>

                <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>

                    {
                        countries.map((elm, _id) => {

                            return (
                                <div key={_id}>
                                    <div className="list-group">
                                        <Link to={`/${elm.alpha3Code}`}>
                                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${(elm.alpha2Code).toLowerCase()}.png/`} />
                                            <p className="list-group-item list-group-item-action">{elm.name.common}</p>

                                        </Link>

                                    </div>

                                </div>
                            )
                        })

                    }

                </div>
            </>
            :
            <h1>CARGANDO....</h1>

    )
}

export default HomePage
