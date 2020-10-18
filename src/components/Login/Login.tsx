import React from "react";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import LoginWithSocial from "./LoginWithSocial";
const Login: React.FunctionComponent = (props: any) => {
  console.log(props);

  function clickHandle() {
    props.history.push("/dashboard");
  }

  const signHandle = () => {
    props.history.push("/register");
  };
  return (
    <div style={{ marginTop: "2.2rem", backgroundColor: "#f3f6f8" }}>
      <div className="login-container">
        <div style={{ marginLeft: "10rem" }}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt="react"
            style={{ width: "40%" }}
          />
        </div>
        <div>
          <h2 className="heading">Welcome to React Apps</h2>
        </div>
        <div>
          <div>
            <label>User Name</label>
          </div>
          <input type="text" className="input-field" />
          <FontAwesomeIcon icon={faUser} className="icon-style" />
        </div>
        <div>
          <div style={{ marginTop: "5px" }}>
            <label>Password</label>
          </div>
          <input type="password" className="input-field" />
          <FontAwesomeIcon icon={faEyeSlash} className="icon-style" />
        </div>
        <div style={{ display: "flex", marginTop: "5px" }}>
          <div>
            <input type="checkbox" />
            <span>Rememeber Me</span>
          </div>
          <div style={{ width: "35%" }}></div>
          <div> Forgotten Password?</div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <div>
            <button className="buttons" onClick={clickHandle}>
              Login
            </button>
          </div>
          <div style={{ marginTop: "13px" }}>
            <button className="buttons" onClick={signHandle}>
              Sign Up
            </button>
          </div>
        </div>
        <LoginWithSocial />
      </div>
    </div>
  );
};
export default Login;
