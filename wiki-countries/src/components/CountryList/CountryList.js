import React from 'react';

import CountryTab from './CountryTab/CountryTab';

const countryList = ({ list }) => (
                <div className="list-group">
                    {
                        list.map((country, id) => (
                            <CountryTab key={ country + id } name={ country.name.common} id={ country.cca3} flag={ country.flag }/>
                        ))
                    }

                </div>
);

export default countryList;