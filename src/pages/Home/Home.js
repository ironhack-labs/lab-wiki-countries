import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CountryList,Navbar } from '../../components'

class Home extends React.Component {
    
    render(){
        return (
            <div>
                <Navbar/>
                <div className='container'>
                    <div className='row'>
                        <CountryList countries={this.props.countries}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;
