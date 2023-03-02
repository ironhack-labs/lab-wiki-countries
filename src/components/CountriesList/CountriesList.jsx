import { Link, useParams } from "react-router-dom";
import { useState } from "react";


const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";


function CountriesList({ countries }) {

    return (

        <div>

            {countries.map(elm => {
                return (
                    <>

                        <img key={elm.apha2Code} src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} alt="" />
                        <Link to={elm.alpha3Code}><p key={elm.alpha3Code}>{elm.name.common}</p></Link>
                    </>
                )
            }
            )
            }
        </div>
    )
}

export default CountriesList 