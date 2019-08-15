import React from 'react'

const List = ({ name, flag }) => {

    return (
        <div>
            <ul>
                <li className="list-group-item list-group-item-action col-md-6">
                    <p>{flag} <span> {name}</span></p>

                </li>
            </ul>
        </div>)
}
export default List