import React from "react";
import {Link} from "react-router-dom";
import countriesList from "../../"

//class
class CountriesList extends React.Component {
    state = {
        countries: CountriesList
    }

    render(){

    }
}
function CountriesList(props) {
    console.log("Props sol",props)
    console.log("Countries", props.countries[0])

    
}

export default CountriesList;