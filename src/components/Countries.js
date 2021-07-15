import React from 'react'
import './Countries.css'

const Countries = ({ name }) => {
    return (
        < div class="container" >
            <div class="row">
                <div class="col-5" style="max-height: 90vh; overflow: scroll">
                    <div class="list-group">
                        <a class="list-group-item list-group-item-action" href="/ABW" >{name}</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Countries