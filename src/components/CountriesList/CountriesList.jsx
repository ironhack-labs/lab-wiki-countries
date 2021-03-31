import { Link } from "react-router-dom";

import './CountriesList.css'

export default function CountriesList({data}) {

    const listCountry = () => {
        let countries = []
        data.map((country) => {
            countries.push (
                <Link to={`/${country.name.common}`}>
                    <div className="row country__list__item">
                        {country.flag} {country.name.common}
                    </div>  
                </Link>
            )
        })
        return countries
    }

    return(
        <div>{listCountry()}</div>
    )
}

