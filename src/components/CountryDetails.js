import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function CountryDetails(props) {

    const [ currentCount, setCurrCountry ] = useState({});

    
    let cca3 = props.match.params.cca3

    const getCountry = () => {
        axios.get(`https://countries.tech-savvy.tech/countries`)
          .then((response) => {
            if (!response) {
                return
            } else {
                let oneCountry = response.data.filter((country)=>{
                    return country.cca3 === cca3
                })
                let setCountry = {
                    name: oneCountry[0].name.common,
                    capital: oneCountry[0].capital[0],
                    area: oneCountry[0].area,
                    borders: oneCountry[0].borders,
                    cca3: oneCountry[0].cca3
                }
                setCurrCountry(setCountry)
            }
        });
    }

    useEffect(() => {
        getCountry()
        
      }, []);

    useEffect(() => {
        if (cca3 !== currentCount.cca3){
            console.log('com updated', cca3)
            getCountry()
        }
    })

    const displayBorders = () => {
        //trying to get name but it doesnt work, i cant figure out how to get the results outside
        //tried many different ways but sadly nothing worked ://
        let countries = []
        console.log(props.countryList)
        axios.get('https://countries.tech-savvy.tech/countries')
            .then((results) => {
                countries = results.data
            })
            
        return currentCount.borders.map((cca6, i)=>{
            console.log(countries)
            let countryName = countries.filter((country)=>{
                    return country.cca3 === cca6
            })
            console.log(countryName)
            return (
                <div><Link to={`/${cca6}`}>{cca6}</Link></div>
                )
        })
    
    }

    return (
        <div>
            <h1>{currentCount.name}</h1>
            <article>
                <p>Capital: {currentCount.capital}</p>
                <p>Area: {currentCount.area} km²</p>
                <h3>{currentCount.name} borders</h3>
                {
                    //displaying borders
                    currentCount.borders && currentCount.borders.length ? (displayBorders()) : (<div> No one :/ </div>)
                }
            </article>
        </div>
    )
}

export default CountryDetails