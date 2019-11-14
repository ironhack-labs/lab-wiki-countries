import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <form>
      <div>
        <div className="field has-addons">
          <div className="control">
            <input className="input" name="search" type="text" placeholder="Find a Country" onChange={this.props.searchInput}/>
          </div>
          <div className="control">
            <a href ="3"className="button is-info">Search</a>
          </div>
        </div>
      </div>
    </form>
    )
  }
}
