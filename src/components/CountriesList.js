import { Link } from 'react-router-dom'

function CountriesList ({ countriesArr }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                    <div className="list-group">
                        {countriesArr.map(countrie => <Link className="list-group-item list-group-item-action" to={`/${countrie.alpha3Code}`}>{countrie.name.common}</Link> )}  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountriesList