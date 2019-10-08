import React from "react"
import NavLink from "./NavLink"

class NavigationColumn extends React.Component {
  constructor(props) {
    super(props)
  }

  populateLinks = (arrayOfItems) => {
    return arrayOfItems.map((eachItem, i) => {
      return <NavLink key = {i} country = {eachItem} />
    })
  }

  render() {
    return (
      <div id = "navigation-column">
        {this.populateLinks(this.props.countries)}
      </div>
    )
  }
}

export default NavigationColumn