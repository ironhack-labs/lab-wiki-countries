import React from 'react'
import { NavLink } from "react-router-dom";
import countries from '../countries.json'

const CountryDetail = props => {

    const getCountry = id => countries.find(obj => obj.cca3 === id);
    const { params } = props.match;
    const ObjectCountry = getCountry(params.id);
    let searchname = (j) => {
        return countries.filter((x, i) => {
            if (x.cca3 === j) {
                return true

            }
        })[0].name.common
    }



    return (
        <div>
            <h1>

                {ObjectCountry.name.common}
            </h1>
            <hr></hr>
            Capital:  {ObjectCountry.capital}
            <hr></hr>
            Area:  {ObjectCountry.area}m2
            <hr></hr>
            <div className="row">
                <div className="col-5">
                    Borders:
                </div>
                <div className="col-7">
                    <ul>

                        {ObjectCountry.borders.map((x, index) => {
                            return <li key={index}><NavLink to={"/" + x}>{searchname(x)}</NavLink></li>
                        })}
                    </ul>
                </div>

                {/* <Link coja="fasdf"  className="list-group-item list-group-item-action" to={"/"+e.cca3}>{e.flag} {e.name.common}</Link> */}


            </div>



        </div>
    )
}

export default CountryDetail