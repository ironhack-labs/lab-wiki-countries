import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.article`
margin-left: 2rem;
border: solid 1px black;
border-top: none;
`
;

const ListCard = ({name, flag, id}) => {
    return ( 
        <NavLink activeClassName='isActive' to={`/country/${id}`}>
            <StyledCard>
                <span>{flag}</span>
                <p>{name}</p>
            </StyledCard>
        </NavLink>
     );
}
 
export default ListCard;
