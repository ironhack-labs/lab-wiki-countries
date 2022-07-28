import { Link } from "react-router-dom";

function CountriesList(props) {

    return (
        <div>
            <h2 style={{ margin: '2rem' }}>List of Countries</h2>
            <div className="container">
                <div className="row" style={{ margin: '0', display: 'flex', justifyContent: 'center' }}>
                    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                        <div className="list-group">
                            {props.data.map(e => {
                                return (
                                    <Link to={e.alpha3Code} className="list-group-item list-group-item-action">
                                        {e.name.common}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CountriesList;