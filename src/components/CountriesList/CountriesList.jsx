import { useState } from "react";
import countriesList from "../../countries.json"
import { Link } from "react-router-dom";

function CountriesList() {



    return (
        <div className="scroll">
            {countriesList.map((elem) => {
                let imgCode = `https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code}.png`
                let imgCodeLowe = imgCode.toLowerCase()
                console.log

                return (
                    <Link to={`/CountryDetail/${elem.alpha2Code}`}>
                        <div className="country">
                            <img src={imgCodeLowe} alt="" />
                            <p> {elem.name.official}</p>
                        </div>
                    </Link>
                )
            })}
        </div>


    )
}


export default CountriesList;