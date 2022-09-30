import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';

function CountriesList(props){

    return(
        <div style={{maxHeight: 700, width: 200, overflow: 'scroll', border: '1px solid black', margin: 20, padding: 20}}>
            {props.countryData.map((country) =>{
                return(
                    <div className={"overflow: scroll"}>
                        <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;