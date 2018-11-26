import React from 'react';
import {Link} from "react-router-dom";

const ListCountry = ({country, index}) => (
        <Link className="list-group-item list-group-item-action" key={index} to={`/CountryDetail/${country.cca3}`}>{country.flag} {country.name.common}</Link>
);

export default ListCountry;