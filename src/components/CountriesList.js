import { Link } from 'react-router-dom'

function CountriesList({countries}){

    return(
        <div className="container">
            <div className="row">
                <div className="col-5" /*style="max-height: 90vh; overflow: scroll"*/>
                    <div className="list-group">
                        {
                            countries.map((eachCountry, index) => {
                                return (
                                    <Link className="list-group-item list-group-item-action" to={`/country/${eachCountry.cca3}`}>{eachCountry.flag} {eachCountry.name.common}</Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountriesList;