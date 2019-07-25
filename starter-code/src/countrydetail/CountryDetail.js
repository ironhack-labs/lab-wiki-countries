import React from 'react';
import data from '../countries.json';
import { Link } from 'react-router-dom';
import '../App.css';

class CountryDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            theCountry:{},
            Borders:[],
        }
    }

    componentWillMount(){
        this.fetchCountry(this.props.match.params.CC);
    }

    shouldComponentUpdate(nextProps, nextState){

        if (this.props.match.params.CC !== nextProps.match.params.CC
            ){

            this.fetchCountry(nextProps.match.params.CC);
            return true;
        }
        return true;
    }

    fetchCountry(CC){
        let clone = {...this.state.theCountry};
        data.forEach((eachCountry)=>{
            if(eachCountry.cca3===CC){
                clone = eachCountry;
            }
        })


        this.setState({theCountry: clone},()=>{
            this.BordersName(clone.borders);
        })
    }

    showCountry = ()=>{
        console.log('Country',this.state.theCountry);
        return(
            <div>
                <h1>{this.state.theCountry.name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td className='tdpart'>Capital</td>
                    <td>{this.state.theCountry.capital[0]}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>{this.state.theCountry.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {this.showBorders()}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }

    BordersName = (borders)=>{
        let clone = [...this.state.Borders];
        let i=0;
        while(i<borders.length){
            data.forEach((eachCountry)=>{
                if(borders[i] === eachCountry.cca3)
                {
                    clone.push(eachCountry.name.common);
                    i++;
                }
            })
        }
        this.setState({Borders: clone},()=>{
            console.log('Borders',this.state.Borders)
        });
    }

    showBorders = ()=>{
        let clone = [...this.state.Borders];
       return this.state.theCountry.borders.map((eachPath,i)=>{
            console.log('eachpath',eachPath);
            console.log('each',clone[i]);
            return(
                <li><Link exact to={"/"+eachPath}>{this.state.Borders[i]} </Link></li>
            )
        })
    }

    

  render(){
      return (
          <div>
          {this.showCountry()}
        </div>
        )  
    }  
}

export default CountryDetail;




