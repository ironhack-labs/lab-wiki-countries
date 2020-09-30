import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const ContactList = (props) => {

    const [search, setSearch] = useState('')
    const [countriesData] = useState(props.countries)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredCountries = countriesData.filter(country => {
        return (
            (country.name.common.toLowerCase()).indexOf(search.toLocaleLowerCase()) > -1
        )
    })

    return (
        <>
            <div className="row">
                <div className="col-12 search-block">
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search by Country" onChange={(e) => handleChange(e)} value={search} />
                    </div>
                </div>
                <div className="col-12 countries-list">
                    {filteredCountries.map((country) =>
                        <NavLink className="country-list-row" activeClassName="active" to={`/${country.cca3}`}>
                            <figure>{country.flag}</figure>{country.name.common}
                        </NavLink>
                    )}
                </div>
            </div>
        </>
    )
}

export default ContactList