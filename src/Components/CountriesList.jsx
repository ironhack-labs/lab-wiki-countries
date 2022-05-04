import { Link } from "react-router-dom";
// import countriesData from "../countries.json";


function CountriesList({ countries }) {

        return (
        <div className="container">
            <div className="row">
                <div className="col-5" >
                    <div className="list-group">
                        <h2>Countries</h2>
                        {
                            countries.map((elm) => {
                            return <Link key={elm.alpha3Code} className="list-group-item list-group-item-action" to={`/${elm.alpha3Code}`}>
                                         <img src={`https://flagpedia.net/data/flags/icon/72x54/${elm.alpha2Code.toLowerCase()}.png`} />
                                         <p>{elm.name.official}</p>
                                     </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>    
    )

}

export default CountriesList;

