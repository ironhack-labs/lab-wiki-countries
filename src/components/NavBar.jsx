import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Title>WikiCountries</Title>
    </Navbar>
  )
}

export default NavBar

const Title = styled(Navbar.Brand)`
  margin-left: 1rem;
`
