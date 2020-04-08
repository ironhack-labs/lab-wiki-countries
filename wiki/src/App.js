import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import countries from './countries'
import 'bootstrap/dist/css/bootstrap.css'; 



export default function App() {
  //const [selectedcountry, setcountry] = useState(countries[0])

  return (
     <Router>
       <div className="container">
       <div className="row">
         <div className="divheader col-12">Wiki Countries</div>
          <div className="col-4 country-row">
          {countries.map(country=>{
 const {name:{official},cca3:code} = country; //destructuring and taking data from json file- making offical and code availble
return <div className="col-12"><Link to={`/detail/${code}`}>{official}</Link></div> //rendering links
})}
          </div>
            <div className="col-8">
              <Switch>
                <Route  path='/detail/:id' component={Detail}/>
            </Switch>
          </div>
        </div>
        </div>
      </Router>
  );
}

function Detail() {
  const {id}= useParams(); //hook to returns url params
    const selectedcountry = countries.find(country=>country.cca3==id) //finding 
    const {name:{official},capital,area,borders} = selectedcountry
      return (
        <div className="col-12">
        <table className="table table-bordered">
        <tr colspan="2">
        <td>{official}</td>
        </tr>
        <tr>
        <td>Area</td>
        <td>{area}</td>
        </tr>
        <tr>
        <td>Borders</td>
        <td>{borders.map(border=>(<li><Link to={`/detail/${border}`}>{border}</Link></li>))}</td>
        </tr>
        </table>
        </div>
      )
    }
    



