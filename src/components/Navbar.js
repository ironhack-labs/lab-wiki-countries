//import '../../package.json' to render lab name?
import React, {Component} from 'react'


class Navbar extends Component{

render(){
    return (
       <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
               <a class="navbar-brand" href="/">WikiCountries</a>
           </div>
       </nav>
    )

  }

}




export {Navbar};



