import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background-color: slateblue;
    color: white;
    padding: .5rem 3rem;
`;

const NavBar = ({children}) => {
    return ( 
        <StyledNav>{children}</StyledNav>
     );
}
 
export default NavBar;