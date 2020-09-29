import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {

    return props.data.map( country => {
        return (
            <Link to={"/country/" + country.cca3 } className="row text-dark list-group-item list-group-item-action">
                {country.flag} &nbsp;
                {country.name.common}
            </Link>
        )
    })

}