import {Link} from 'react-router-dom';


function CountriesList(props) {
 const {data} = props;
   
     return (
   
        <div className="container">
         <div className="row">
           <div className="col-5">
            <div className="list-group">
             <h2> Countries List</h2>
              {data.map((el) => {
                 return (
                <div key={el.alpha3Code}>
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${el.alpha2Code.toLowerCase()}.png`} />
                   <h4><Link className="list-group-item list-group-item-action" to={`/${el.alpha3Code}`}>{el.name.common}</Link></h4>
                   
                </div>   
                )
               })}  
            </div>
          </div>
         </div>
       </div>
 
  )   
}

export default CountriesList;