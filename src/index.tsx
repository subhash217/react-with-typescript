import React from "react";
import { render } from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

interface IPerson {
  name: string;
  age: number;
  company: string;
}

interface detail {
  address: string;
  details?: IPerson;
}

export const myContext = React.createContext({
  name: "subash",
  age: 28,
  company: "Infy",
});
console.log(myContext);
console.log(process.env.NODE_ENV);
function initialSetup() {
  return (
    <React.StrictMode>
      <App name="subash" age={28} />
    </React.StrictMode>
  );
}

render(initialSetup(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
