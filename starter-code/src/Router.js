import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/notFound";
import App from "./pages/home";
import Nav from "./components/Nav";

function Router() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/:id" component={App}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
