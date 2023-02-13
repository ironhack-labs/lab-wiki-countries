import { Link } from "react-router-dom"

function List({countries, ...props}){

    console.log("countries", countries);
    return(

        <div className="col-5" style={{maxHeight:"90vh", overflow:"scroll"}}>
            <div className="list-group">
                {countries.length ? countries.map ((country, index) => (
                <Link 
                key={index}
                style={{display: "flex", flexDirection: "column", alignItems: "center"}}
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}>
                <img  className="mb-3 mt-3"
                width={40}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                alt="country-flag"/>
                {country.name.common}
                </Link>

                )): "loading"}
            </div>
        </div>

    )
}

export default List;
