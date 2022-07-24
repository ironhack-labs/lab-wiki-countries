import React from 'react'
import Card from './Card'

function CountriesList(props) {

    const { data } = props


  return (

        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll", marginRight: "none"}}>

        {data.map((country, i) => {
            return <Card key={i} country={country} />
        })}

        </div>

  )

}

export default CountriesList;