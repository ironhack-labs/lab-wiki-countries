import React from 'react';

const countryDetail = (country) => {

    return (
        <p>{ country ? country.name.common : null }</p>
    );
};

export default countryDetail;