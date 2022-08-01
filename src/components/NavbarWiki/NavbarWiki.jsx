import { Navbar, NavbarBrand } from 'reactstrap';
function NavbarWiki() {
  return (
    <>
      <Navbar className="my-2" color="secondary" dark>
        <NavbarBrand href="/">WikiCountries</NavbarBrand>
      </Navbar>
    </>
  );
}

export default NavbarWiki;
