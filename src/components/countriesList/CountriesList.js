import React from 'react';
import { Link } from 'react-router-dom';

import countriesData from '../../countries.json';
import './CountriesList.css'

countriesData.sort((a, b) => a.name.common.localeCompare(b.name.common));

const CountriesList = props => {
    const [ list, setList ] = React.useState(countriesData)

    const [ activeLink, setActiveLink ] = React.useState();

    const handleChange = e => {
        const filteredList = countriesData
            .filter(country => {
                return country.name.common.toLowerCase().match(e.target.value.toLowerCase())
            })

        setList(filteredList)
    }

    React.useEffect(() => {        
        setActiveLink(props.countryCode)

    }, [props.countryCode])

    React.useEffect(() => {
        const activeElement = document.querySelector('.active');
        
        if (activeElement) activeElement.scrollIntoView({block: 'nearest'});

    }, [activeLink, list])

    console.log('rendering list')

    return (
        <div className="countries-list">
            <div className="form-floating mb-3">
                <input type="text" placeholder="Search" className="form-control" id="floatingInput" onChange={e => handleChange(e)} />
                <label htmlFor="floatingInput">Search</label>
            </div>            
            <div className="list-group scrollable">
                {
                    list.map(country => {
                        const getClass = countryCode => countryCode === activeLink ? 'active list-group-item' : 'list-group-item';

                        return (
                            <Link 
                                to={country.cca3} 
                                className={getClass(country.cca3)} 
                                key={country.cca3}>

                                    {country.name.common}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CountriesList;