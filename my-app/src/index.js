import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

class Countrydetail extends React.Component {
    render() {
        const { cca3 } = this.props;
        return(
            <div>
                
            </div>
        )
    }
}

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Your application code */}
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);