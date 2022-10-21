import { Routes, Route, Link, useParams } from "react-router-dom";


export default function CountriesList(props) {
    let { alpha3Code } = useParams()

    return (



        props.countries.map((countries) => {

            return (
                <div className="col-5" >
                    <div className="list-group">
                        <Link className="list-group-item list-group-item-action" href="/alpha3Code"
                        >{countries.name}</Link>
                    </div>

                </div>

            )
        })
    )
}


