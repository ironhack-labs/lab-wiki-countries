import {Link} from "react-router-dom";

function CountriesList({countries}) {

    return (
       <div>{countries.map(country => {
        return (
            <div> 
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                <Link to = {`${country.alpha3Code}`}>
                    {country.name.common}</Link>
            </div>
        )
       }
        
        )}</div>
    )
}


export default CountriesList;