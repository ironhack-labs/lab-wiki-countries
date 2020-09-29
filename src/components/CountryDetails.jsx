import React from 'react'

const CountryDetails = (props) => {
    const getCountry = props.countries.filter(country => country.cca3 === props.country)

    const getValues = (obj) => {
        return Object.values(obj).map(val => {
            return (<p>{val}</p>)
        })
    }



    const getBorders = (arr) => {
        const bordersArr = []
        arr.forEach(el => {
            bordersArr.push(props.countries.filter(country => country.cca3 === el))
        })

        if (!bordersArr.length) {
            return (<p>No Borders</p>)
        } else {
            return bordersArr.map(el => {
                return (<p>{el[0].name.official}</p>)
            })
        }

    }

    return (
        <>
            
            <h1><figure>{getCountry[0].flag}</figure>{getCountry[0].name.common}</h1>
            <div className="row">
                <div className="col-6"><strong>Official name</strong></div>
                <div className="col-6">{getCountry[0].name.official}</div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Capital</strong></div>
                <div className="col-6">{getCountry[0].capital}</div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Region</strong></div>
                <div className="col-6">{getCountry[0].region} / {getCountry[0].subregion}</div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Area</strong></div>
                <div className="col-6">{getCountry[0].area} km<sup>2</sup></div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Languages</strong></div>
                <div className="col-6">
                    {getValues(getCountry[0].languages)}
                </div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Borders</strong></div>
                <div className="col-6">
                    {getBorders(getCountry[0].borders)}
                </div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Calling code</strong></div>
                <div className="col-6">+{getCountry[0].callingCode}</div>
            </div>
            <div className="row">
                <div className="col-6"><strong>Independent</strong></div>
                <div className="col-6">{getCountry[0].independent ? 'Yes' : 'No'}</div>
            </div>
        </>
    )
}

export default CountryDetails