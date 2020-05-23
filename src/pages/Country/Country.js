import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CountryList,CountryDetail,Navbar } from '../../components'

class Country extends React.Component {
    render(){
        return (
            <div>
                <Navbar/>
                <div className='container'>
                    <div className='row'>
                        <CountryList countries={this.props.countries}/>
                        <CountryDetail countries={this.props.countries} countryId={this.props.match.params.id} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Country;
