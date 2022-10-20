import {Link} from 'react-router-dom';

function CountriesList(props) {
    const style={
        width:'10%',
        alignItems: 'center'
    };
    const CountryDivStyle = {
        maxHeight: '90vh',
        overflow: 'scroll',
        width: '25rem',
        margin:'0rem 2rem'
       }
       
  return (
    <div className="col-4" style = {CountryDivStyle}>
        {props.countries.map(country => {
        return (
            <div key = {country.alpha3Code} className="list-group">
            <Link className="list-group-item list-group-item-action" 
            to={`/${country.alpha3Code}`}>
            <img style = {style} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} /> <br />
            {country.name.common}
            </Link>
            </div>   
        )

    })}
    </div>
  );
}
export default CountriesList;
