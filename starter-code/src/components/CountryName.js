import React, { Component } from "react";

export default class CountryName extends Component {
  state = {
    activeState: false,
  };

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    const newState = !this.state.activeState;
    this.setState({ activeState: newState }, this.props.clickOnCountry(this.props.cca3));
  };

  render() {
    const { name, cca3 } = this.props;
    //const imgUrl = 'https://www.countryflags.io/' + cca3.toLowerCase() + '/flat/64.png';
    const imgUrl =
      "https://www.countries-ofthe-world.com/flags-normal/flag-of-" +
      this.props.name.common.replace(" ", "-") +
      ".png";
    return (
      <div
        key={cca3}
        href={"/" + cca3}
        className={`list-group-item list-group-item-action ml-4 ${
          this.props.active ? "active" : ""
        }`}
        onClick={this.clickHandler}>
        <img src={imgUrl} alt="" style={{ maxWidth: "20px", margin: "5px" }} />
        {name.common}
      </div>
    );
  }

}
