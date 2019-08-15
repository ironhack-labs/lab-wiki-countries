import React from 'react'

const Card = ({ name, capital, area, borders, id }) => {

    return (
        <div>
            <h2>{name}</h2><hr />
            <p>Capital {capital}</p><hr />
            <p>Area {area}</p>
            <ul>
                <li className="col-md-3">
                    Borders:

                </li>
            </ul>
            <ul>
                <li className="col-md-3">
                    {borders}

                </li>
            </ul>
        </div>)
}
export default Card