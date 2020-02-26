import React from "react";


export default class CountriesList extends React.Component{


    render(){
        return(

            <a className="list-group-item list-group-item-action" href={this.props.href}> {this.props.CountryName} </a>
            
        )
    }
}

/*


                <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
                <a className="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
                <a className="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
                <a className="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
                <a className="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
                <a className="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
                <a className="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
                <a className="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
                <a className="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
                <a className="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
                <a className="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
                <a className="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
                <a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
                <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
              </div>
            </div>

*/