import React from 'react';
import { list } from 'react-dom';

const CountriesList = () => {
  
    return (
        <div class="col-5">
            <div class="list-group">
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
                <a class="list-group-item list-group-item-action" href="/ZWE" >🇿🇼 Zimbabwe</a>
            </div>
        </div>
       
    )
}

export default CountriesList;