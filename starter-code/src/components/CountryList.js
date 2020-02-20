import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../../src/countries'

class CountryList extends React.Component {

    state= {
        countries: [],
        pathName:''
    }

    componentDidMount() {
        const data = [...Data]
        this.setState({
            ...this.state,
            countries: data
        })
    }

    render() {
        const pathName = this.state.pathName
        const linkList = this.state.countries.map( (e,i) =>  
                <li key={i} className={`list-group-item ${pathName===`${e.cca3}` ? 'active' :'' }`}>
                    <Link to={`/${e.cca3}`}>Flag - {e.name.official}</Link>
                </li>
                )

        return (
            <div className="col col-6">
                <ul className="CountryList list-group">
                    {linkList}
                </ul>
            </div>
        )
    }

}

export default CountryList