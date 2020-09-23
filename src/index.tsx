import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RedbusHome } from "./webApps/RedbusUI/Home";
import { AmazonHome } from "./webApps/AmazonUI/Body";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const myContext = React.createContext({
  name: "subash",
  age: 28,
  company: "Infy",
});
// console.log(myContext);
console.log(process.env.NODE_ENV);

function initialSetup() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App name="subash" age={28} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1>No Apps Available please use Nav Menu</h1>}
          />
          <Route path="/redbus" component={RedbusHome} />
          <Route path="/amazon" component={AmazonHome} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

render(initialSetup(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
