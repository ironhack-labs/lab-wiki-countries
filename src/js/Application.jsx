import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Countries from "./Countries";

const Application = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Countries} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Application;
