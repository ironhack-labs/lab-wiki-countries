import { Link } from 'react-router-dom';


const ListItem = ({ country }) => {
  return (
    <Link to={`/detail/${country.alpha3Code}`}>

      <div className='ListItem border border-radius d-flex align-items-center justify-content-center p-1 mb-4'>
        <img width="30"  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
        <h5 className="m-3">{country.name.common}</h5>
      </div>
    </Link>
  );
};

export default ListItem;
