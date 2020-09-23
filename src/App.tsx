import React, { useState } from "react";
import "./App.css";
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
  return (
    <div className="App">
      <NavBar />
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
    </div>
  );
};

export default App;
