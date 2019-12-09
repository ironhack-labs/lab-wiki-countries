import React, { Component } from 'react';

export class Welcome extends Component {
  render() {
    return (
      <div className="">
        <h1 className="text-2xl py-3 px-5 border-b font-bold">
          Do you like countries? <br></br>This is the React App for you!
          <small className="text-sm text-gray-500 ml-3 font-normal"></small>
        </h1>
      </div>
    );
  }
}

export default Welcome;
