import { Link } from "react-router-dom";

const CountriesList = ({ Countries }) => {



    return (
        <div className="row d-flex flex-column">
            <h1>Listado de paises</h1>
            <hr />
            <ul className="list-unstyled col">
                {
                    Countries.map(elm => {
                        return (

                            <li key={elm.alpha3Code} className="col-2">
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                                < Link to={elm.alpha3Code} > {elm.name.common}</Link >
                            </li>
                        )
                    })
                }
            </ul >

        </div>
    )

}

export default CountriesList


