import React, { useState } from "react";
import "./App.css";
import { myContext } from "./index";
import { Header } from "./header";
import Users from "./components/users";
import Parent from "./components/subComponents/Parent";

interface Props {
  name: string;
  age: number;
}

const App: React.FunctionComponent<Props> = (props) => {
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
      <myContext.Provider value={details}>
        <Header heading="Counter with Context API" click={click} />
        <Users buttonloading />
        <div style={{ marginTop: "30px" }}>
          <Parent />
        </div>
      </myContext.Provider>
    </div>
  );
};

export default App;
