import { Link } from 'react-router-dom';

const CountriesList = ({countries}) => {
    
    return (
        <>
          {/* <div className="container">
            <div className="row"> */}
              <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                  {countries.map((elm) => (
                      
                      
                      <li type="button" className="list-group-item list-group-item-action" key={elm.cca3}>
                          
                          <Link to={ `/${ elm.cca3 }` }>{ elm.flag}{ elm.name.common }</Link>
                      
                      </li>)) }
                              
                </div>
              </div>
            {/* </div>
          </div> */}
        </>
      );
}

export default CountriesList;
