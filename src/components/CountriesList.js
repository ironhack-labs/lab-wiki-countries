import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => (
    
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
       
        <div className="list-group">
            {countries &&
                countries.map((country) => (
                   
                ))}
        </div>
    </div>
);

export default CountriesList;