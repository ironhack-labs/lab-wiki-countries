import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: #61dafb;
  height: 80px;
  ${'' /* margin-top: -80px; /////////// possible uncomment */}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkRouter)`
  text-color: #fff;
  text-decoration: none;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
`;

// export const NavItem = styled.li`
//   height: 80px;
// `;

// export const NavLinks = styled(LinkScroll)`
//   color: #fff;
//   display: flex;
//   align: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     border-bottom: 3px solid ##01bf71;
//   }
// `;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
