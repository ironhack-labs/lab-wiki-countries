import { Link } from "react-router-dom";

function CountriesList({data}) {
    
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {data.map(country => {
                    return (
                        <Link key={country._id} className="list-group-item list-group-item-action d-flex justify-content-start" to={`/${country.alpha3Code}`}><p><img className="flagIcon" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" /> {country.name.common}</p></Link>
                    )
                })}
            </div>
          </div>
    )
}

export default CountriesList;