import { Link, NavLink } from "react-router-dom"



export default function ContriesList(props) {

    return (props.countries.map(
        (countriesObj) => {
            return (

                <div className="col-5" style={{
                    maxHeight: "90vh", overflow: "scoll"
                }} key={countriesObj.alpha3Code}>
                    <div className="list-group">
                        <Link className="list-group-item list-group-item-action" to={`/${countriesObj.alpha3Code}`}>
                            {countriesObj.name.official}
                        </Link >
                    </div>
                </div >
            )
        }
    )
    )
}
