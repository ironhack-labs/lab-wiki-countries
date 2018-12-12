import React, { Component } from 'react';




class SearchBox extends Component{





render(){
    return(
        
        <div>
        <label>Search country by name</label>
        <input value={this.props.valueOfbox} onChange = {(e) => this.props.searchOnChange(e)}/>
        </div>

    )
}



}



export default  SearchBox;