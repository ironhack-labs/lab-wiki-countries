import { Link } from "react-router-dom";

export default function CountriesList(props){
    return (
        <div>
            {props.countries.map((country)=>{
                return(
                    <Link key={country._id} to={"/" + country._id} countries={props.countries}>
                        <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" width="100px" height="auto" />
                        <p>{country.name.official}</p>
                    </Link>
                )
            })}
        </div>
    )
}