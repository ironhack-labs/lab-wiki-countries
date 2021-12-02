import React from "react";
// import './CountriesCard.css'
const CountriesCard = ({ name, flag }) => {

    return (
        <div>
            <img src={flag} alt={name} />
            <p>{name}</p>
        </div>


    )
}

export default CountriesCard