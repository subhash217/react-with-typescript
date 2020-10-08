import React from "react";
import "./Login.scss";

const Login: React.FunctionComponent = (props: any) => {
  console.log(props);

  function clickHandle() {
    props.history.push("/dashboard");
  }
  return (
    <div style={{ marginTop: "7rem" }}>
      <div className="login-container">
        <div>
          <h2 className="heading">Welcome to React Apps</h2>
        </div>
        <div>
          <div>
            <label>User Name</label>
          </div>
          <input type="text" className="input-field" />
        </div>
        <div>
          <div style={{ marginTop: "5px" }}>
            <label>Password</label>
          </div>
          <input type="password" className="input-field" />
        </div>
        <div style={{ marginTop: "15px" }}>
          <div>
            <button className="buttons" onClick={clickHandle}>
              Login
            </button>
          </div>
          <div style={{ marginTop: "13px" }}>
            <button className="buttons">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
