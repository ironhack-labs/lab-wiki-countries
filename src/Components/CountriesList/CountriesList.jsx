import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CountriesList({ countries }) {

    return (
        <div>
            <h2>Countries</h2>
            {countries.map((elm, i) => {

                return (
                    <div key={i}>
                        <Link to={`/${elm.alpha3Code}`}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="flag" />
                            <p>{elm.name.official}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default CountriesList;

