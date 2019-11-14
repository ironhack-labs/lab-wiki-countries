import React from 'react';

import './App.css';

function App() {
  return (
    <div >
      <div className="row">
  <div className="col-5">Column 5/12</div>
  <div className="col-7">Column 7/12</div>
</div>


<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active">Cras justo odio (active)</a>
  <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
     
    </div>
  );
}

export default App;
