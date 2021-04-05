import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { getAllCountries, getSearch } from '../../services/baseService'
import './CountryList.scss'

class CountryList extends Component { 
    state = {
        allCountries: [],
        loader: true,
        search: '',
    }

    componentDidMount() {
        getAllCountries()
        .then((allCountries) => {
            return this.setState({ allCountries, loader: false })
        })
    }

    onSearch = (e) => {
        let realSearch = (e.target.value).toLowerCase()
        this.setState({search: realSearch})
        // TODO: solucionar 400 from api por velocidad en el input 
        // -> debaunce
        getSearch(this.state.search)
        .then((found) => {
            return this.setState({ 
                allCountries: found,
                loader: false
            })
        })
    }

    render() {
        return (
            <div className="CountryList">
                <input
                    name="search"
                    value={this.state.search}
                    onChange={this.onSearch}
                    autoComplete="off"
                />
                {
                    this.state.loader
                    ? <ClipLoader/>
                    : (
                        <div className="col-5" style={{maxHeight: '90vh', width: 350, overflow: 'scroll'}}>
                        <div className="list-group list-group-flush">
                        {this.state.allCountries.map(c => (
                            <div key={c.name}>
                                <Link 
                                    to={`/detail/${c.alpha3Code}/country`}
                                    className="list-group-item list-group-item-action text-left"
                                >
                                    {c.name}
                                </Link>
                            </div>
                        ))}
                        </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default CountryList

// TODO: Learn useEffect to use function components
//https://medium.com/@timtan93/states-and-componentdidmount-in-functional-components-with-hooks-cac5484d22ad
