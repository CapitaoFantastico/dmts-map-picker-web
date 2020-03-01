import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MapPicker from "./components/MapPicker/MapPicker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/map" exact={true} component={MapPicker} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
