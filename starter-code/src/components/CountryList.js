import React ,{Component} from 'react';

class CountryList extends Component {
    
    render() {
        return(
            <div className="row">
                <div className="list-group">

                    {
                        this.props.countries.map((country,index) =>{
                        return <a className="list-group-item list-group-item-action" href={country.cca3}>{country.flag} {country.name.common}</a>
                        })
                    }
                </div>
        |   </div>
            
        )
    }
}
export default CountryList