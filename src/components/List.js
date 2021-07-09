import React from 'react';
import styled from 'styled-components';

import ListCard from './ListCard';

const List = ({countries}) => {
    return (
      <article>
        {countries &&
          countries.map((country) => (
            <ListCard
              id={country.cca3}
              flag={country.flag}
              name={country.name.common}
            />
          ))}
      </article>
    );
}
 
export default List;