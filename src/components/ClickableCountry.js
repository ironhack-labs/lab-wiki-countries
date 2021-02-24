import { Link } from 'react-router-dom';

const ClickableCountry = ({ alpha3Code, name }) => (
  <li>
    <Link to={`/${alpha3Code}`}>{name}</Link>
  </li>
);
export default ClickableCountry;
