import React from 'react'
import CountryItem from './CountryItem'


export default function CountriesList(props) {

    const displayCountries = () => {
        return (
          props.countries.map((country, idx) => {
            return (
              <CountryItem {...country} key={`${country.cca3}-${idx}`} />
            )
          })
        )
      }



    return (
            <div className="col-6">
                {displayCountries()}
            </div> 
    )
}


