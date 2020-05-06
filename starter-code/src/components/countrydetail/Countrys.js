import React from 'react'
import { Link } from 'react-router-dom'
function Countrys({ name, flag, cca3 }) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="list-group">
                            <Link className="list-group-item list-group-item-action" to={`/${cca3}`}>{flag} {name.common}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Countrys