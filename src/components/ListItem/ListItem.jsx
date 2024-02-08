import { Link } from 'react-router-dom';
import './ListItem.css'

const ListItem = ({ country }) => {
  return (
    <Link to={`/detail/${country.alpha3Code}`}>

      <div className='ListItem border border-radius d-flex align-items-center justify-content-center'>
        <img width="25" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
        <h5>{country.name.common}</h5>
      </div>
    </Link>
  );
};

export default ListItem;