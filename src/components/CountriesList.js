import { Link } from "react-router-dom";

function CountriesList(props){

    
    const arr = props.countries
    
    return(
            <div className="list-group col-5 comp-list">
            { arr ?  arr.map( (country) => {
                return <Link key={country.alpha2Code} className="list-group-item list-group-item-action" to={"/"+ country.alpha3Code} > <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt="flag" /><br /> {country.name.common}</Link>
            }) : <div className="circle-spin-1"></div>}
           
              

            </div>
        
        )
}

export default CountriesList;