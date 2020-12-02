import { Link } from 'react-router-dom';
const CountriesCard = ({ name, flag, cca3 }) => {


    return (

       
        <div className="col-5" styles="max-height: 90vh; overflow: scroll;">
            <div className="list-group">
                <Link to={`/${cca3}`} className="list-group-item list-group-item-action">{flag} {name}</Link>
                </div>
            </div>
    

    )
}

export default CountriesCard


