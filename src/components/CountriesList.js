import { Component } from "react"
import { Link } from 'react-router-dom';

class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: this.props.countries
        }
    }

    render() {
        return (
           <>
          <div class="col-5" style={{ 'max-height': '90vh', 'overflow': 'scroll' }}>
              <div class="list">
                {this.state.countries.map(elm => <Link class="list-group-item list-group-item-action" to={`${elm.cca3}`}>{elm.cca2} {elm.name.common}</Link>)}
               </div>
          </div>
          </>
        )
    }
}


export default CountriesList;