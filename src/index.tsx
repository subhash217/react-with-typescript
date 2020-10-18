import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/register";

import * as serviceWorker from "./serviceWorker";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://jsonplaceholder.typicode.com/users",
  cache: new InMemoryCache(),
});
console.log(client);
client
  .query({
    query: gql`
      query {
        id
        name
        username
        email
      }
    `,
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

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
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

render(initialSetup(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
