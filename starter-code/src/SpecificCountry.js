import React, {Component} from 'react';
import Countries from './countries.json';


class SpecificCountry extends Component{

    constructor(props){
        super(props)
    }
    // Countries.find((countryName)=>{
        
    // })

    findThisCountry = () => {
        console.log("MAXI", this.props)
        return  Countries.map((eachCountry, index)=>{
            console.log(eachCountry)
            if(this.props.match.params.official === eachCountry.name.official){
                return(
                    <div>
                       <h1>{eachCountry.name.official}</h1>

                       <h2>{eachCountry.name.common}</h2> 

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