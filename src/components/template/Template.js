import Navbar from "../navBar/Navbar";
import CountriesList from '../countriesList/CountriesList'

import './Template.css'

const Template = props => {
    console.log('rendering template')
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />
            </div>

            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <CountriesList />
                </div>
                <div className="col-6">
                    {props.children}
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default Template;