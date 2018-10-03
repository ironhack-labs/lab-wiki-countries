import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style.css';
import 'antd/dist/antd.css';
import App from './App';
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 {/* Your application code */}
//             </div>
//         );
//     }
// }

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),
    document.getElementById('root')
);