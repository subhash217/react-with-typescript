import React from "react";

const Register = () => {
  return (
    <div className="register-container">
      <div style={{ marginLeft: "10rem" }}></div>
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
          <button className="buttons">Login</button>
        </div>
        <div style={{ marginTop: "13px" }}>
          <button className="buttons">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
export default Register;
