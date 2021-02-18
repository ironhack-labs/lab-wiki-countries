import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CountriesList extends Component {
    render() {
        return (
            <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div class="list-group">
                    <Link to={{pathname: "/ZWE"}} class="list-group-item list-group-item-action">
                    🇿🇼 Zimbabwe
                    </Link>
                <a class="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>    
                <a class="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                <a class="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
                <a class="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
                <a class="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
                <a class="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
                <a class="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
                <a class="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
                <a class="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
                <a class="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
                <a class="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
                <a class="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
                <a class="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
                <a class="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
                <a class="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
                <a class="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
                </div>
          </div>

        )
    }
}

