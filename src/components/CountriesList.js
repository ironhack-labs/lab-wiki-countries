import { Link } from "react-router-dom";

function CountriesList(props){
    const {countries} = props;

    return(
        <div className="col-5" style={{maxHeight: "90vh", "overflow": "scroll"}}>
            <div className="list-group">
                {countries.map( (country) => (
                    <Link to={"/" + country.alpha3Code} className="list-group-item list-group-item-action" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt="flag" style={{height:30}}/>
                        {country.name.common}
                    </Link>
                ))}
            </div>
        </div>       
    )
}

export default CountriesList;

