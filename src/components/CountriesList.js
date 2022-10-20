import { Link} from "react-router-dom";

function CountriesList({propCountries}){

    return (
        propCountries.map(element=>{
            return (
                <>
            <p><Link to={`/${element.alpha3Code}`}>{element.name.common}</Link></p>
            <img src={` https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`} />
            </>
            )
        })

    )

}

export default CountriesList;

