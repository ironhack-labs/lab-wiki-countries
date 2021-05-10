import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props){
  console.log(props)

      return (
        <div
          style={{
            maxHeight: '90vh',
            overflow: 'scroll',
          }}
        >
          {props.countries.map(({ cca2, cca3, flag }) => {
            return (
              <Link key={cca2} to={`/${cca3}`}>
                <div>
                  <div className="list-group">
                    <p>{`${flag} ${cca3}`}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      );

}


