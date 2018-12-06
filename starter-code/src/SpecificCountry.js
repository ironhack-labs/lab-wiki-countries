import React, {Component} from 'react';
import Countries from './countries.json';

class SpecificCountry extends Component{

    // Countries.find((countryName)=>{
        
    // })

    findThisCountry = () => {
        let myCountry = Countries.map((eachCountry, index)=>{
            console.log(eachCountry)
            if(this.props.match.params.name === eachCountry.name){
                return(
                    <div>
                       <h1>{this.props.match.params.name.official}</h1>

                       <h2>{this.props.match.params.name.common}</h2> 

                    </div>
                )
            }
        })
    }
    
    render(){
        console.log(this)
        return(        
            <div>
 
                    {this.findThisCountry()}

            
            </div>

        )
    }

}

export default SpecificCountry;