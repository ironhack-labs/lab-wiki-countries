import React from 'react';
import { useHistory, Link } from "react-router-dom";

const Links = ({ name, cca3, flag }) => {
  // let history = useHistory();
  // const goToProfile = () => {
  //   history.push(`/country/` + cca3);
  // };
  return (
    <>    
        <Link className="list-group-item list-group-item-action"  to={`/profile/${cca3}`}>
          {flag} {name.common}
        </Link>
        {/* <button className="list-group-item list-group-item-action"  onClick={goToProfile}>
          {flag} {name.common}
        </button> */}
    </>    

  );
};

export default Links;
