import React from 'react'
import { Link } from 'react-router-dom'

const oneCountry = ({ name, flag, cca3 }) => {
    return (
<div className="col-5" styles="max-height: 90vh; overflow: scroll;">
          <div class="list-group">
                <Link className="list-group-item list-group-item-action" to={cca3}>{flag}{name }</Link>
                          </div>
        </div>

    )
}

  
export default oneCountry
