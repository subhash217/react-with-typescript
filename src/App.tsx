import React, { useState, useEffect } from "react";
import "./App.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Route, Link, useRouteMatch, useParams } from "react-router-dom";

import { myContext } from "./index";
import NavBar from "./layouts/navBar";
import Content from "./content";
import { Header } from "./header";
import Users from "./components/users";
import Parent from "./components/subComponents/Parent";

interface Props {
  name: string;
  age: number;
}

const App: React.FunctionComponent<Props> = (props) => {
  let { path, url } = useRouteMatch();

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const h1Ref = React.useRef<HTMLHeadingElement>(null);
  console.log(h1Ref);
  const [details, setDetails] = useState({
    name: "subash",
    age: 28,
    company: "Infy",
  });
  function click() {
    console.log("clicked...!!");
  }

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  const userList = list.map((item: any) => (
    <div className="card" key={item.id}>
      <div>
        <h2 className="card-heading">{item.name}</h2>
      </div>
      <div>
        <div>
          <h4 className="details-heading">Official Details</h4>
          <div>
            <p>
              <b>Company:</b>
              {item.company.name}
            </p>
            <p>
              <b>Email:</b>
              {item.email}
            </p>
          </div>
        </div>
        <div>
          <h4 className="details-heading">Personal Details</h4>
          <div>
            <p>
              <b>Number:</b>
              {item.phone}
            </p>
            <p>
              <b>Street:</b>
              {item.address.street}
            </p>
            <p>
              <b>City:</b>
              {item.address.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="App">
      <Content>
        <h1 className="heading" ref={h1Ref}>
          React App
        </h1>
        <button onClick={() => console.log(h1Ref)}>Click</button>

        <myContext.Provider value={details}>
          <Header heading="Counter with Context API" click={click} />
          <Users buttonloading />
          <div style={{ marginTop: "30px" }}>
            <Parent />
          </div>
        </myContext.Provider>
      </Content>
      <div style={{ width: "95%", margin: "auto" }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: " 79px",
              marginTop: "6rem",
            }}
          >
            {userList}
          </div>
        )}
      </div>
      <Route path={`${path}/:username`} component={UserProfile} />
    </div>
  );
};

export default App;

const UserProfile: React.FunctionComponent = () => {
  let { username }: any = useParams();
  return <div>{username}</div>;
};
