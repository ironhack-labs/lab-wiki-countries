import { Component } from "react";
import { Link } from "react-router-dom";
import Countries from './../countries';
import CountryDetails from "./CountryDetails";

class CountriesList extends Component {

    constructor() {

        super()
        this.state = {

            allCountries: Countries
        }
    }


    render() {




        return (

            <>


                <div class="container">

                    <div class="row">
                        {/* style="max-height: 90vh; overflow: scroll" */}
                        <div class="col-5" >

                            <div class="list-group">
                                {
                                    this.state.allCountries.map((elm) => 

                                        // {
                                        //     let flagCode = ''

                                        //     this.state.allCountries.map((elm) => {

                                        //         let tld = elm.tld[0].slice(1);
                                        //         flagCode = tld.slice(1);
                                        //     })
                                        // }

                                        
                                        <Link to={`/${elm.cca3}`}>

                                            <img src={`https://www.countryflags.io/${elm.tld}/flat/64.png`} alt={'pais'} />

                                            {elm.name.official}

                                        </Link>
                                     

                                    )}
                                
                            </div>
                        </div>
                        <div class="col-7">

                            {/* falta poner aquí el país seleccionado en cuestión... */}

                        </div>
                    </div>
                </div>



            </>
        )
    }
}

export default CountriesList






