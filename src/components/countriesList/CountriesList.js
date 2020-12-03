import { Link } from 'react-router-dom'

import Countries from '../../countries.json'

const CountriesList = ({cca3}) => {
     
    return (


        <div className="col-5" Style="max-height: 90vh; overflow: scroll">
            <div className="list-group">
                {Countries.map(elm => <Link key={elm.cca3} className='list-group-item list-group-item-action' to={cca3}>{elm.flag} {elm.name.official}</Link> )} 
            </div>
        </div>
    )

}

export default CountriesList