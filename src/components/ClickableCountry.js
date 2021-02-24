import { Link } from 'react-router-dom';

const ClickableCountry = ({ cca3, name }) => (
  <li>
    <Link to={`/${cca3}`}>{name}</Link>
  </li>
);
export default ClickableCountry;
