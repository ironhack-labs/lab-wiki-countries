

import { NavLink } from 'react-router-dom';

function CountriesList(props) {
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
                {props.countriesArr.map((element, index) => {
                    return (
                        <NavLink
                            key={index}
                            className="list-group-item list-group-item-action"
                            to={'/' + element.alpha3Code}
                        >
                            <img
                                src={
                                    'https://flagpedia.net/data/flags/icon/72x54/' +
                                    element.alpha2Code.toLowerCase() +
                                    '.png'
                                }
                                style={{width: '25px'}}
                            />{' '}
                            {element.name.official}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}
export default CountriesList;
