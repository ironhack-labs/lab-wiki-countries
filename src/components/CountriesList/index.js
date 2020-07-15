/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import CountryListItem from '../CountryLisItem';

const CountriesList = ({countries}) => {
    return (

        <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div class="list-group">
                {countries.map((elm, idx) => <CountryListItem name={elm.name.common} cca3={elm.cca3} flag={elm.flag}/>)}
            </div>
        </div>
    )
}

export default CountriesList
