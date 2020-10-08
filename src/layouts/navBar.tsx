import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { RedbusHome } from "../webApps/RedbusUI/Home";
import { AmazonHome } from "../webApps/AmazonUI/Body";
import FacebookHome from "../webApps/FacebookUI/Body";
import AddDetails from "../components/CRUD/AddDetails";
import "./navBar.css";
const NavBar: React.FunctionComponent = (props: any) => {
  const dropBox = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState([]);
  console.log(dropBox.current);
  console.log(props);
  const dropDown = () => {
    console.log(dropBox.current);
  };

  const handleChange = (event: any) => {
    setState(event.target.value);
  };

  const pressChange = (event: any) => {
    const input = event.target.value;
    fetch(`https://jsonplaceholder.typicode.com/users?name=${input}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="navbar-container">
        <div className="menu-icon">
          <span>
            <svg
              style={{ fill: "#fff" }}
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="tab-space"></div>
        <div className="image">
          <svg
            style={{ fill: "#fff" }}
            height="32"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </div>
        <div className="content">
          <input
            type="text"
            className="search-input"
            placeholder="search or jump to ..."
            value={state}
            onChange={(event) => handleChange(event)}
            onKeyPress={pressChange}
          />
          <p>
            <NavLink
              to={`${props.match.url}/crud`}
              style={{ textDecoration: "none" }}
              activeClassName="active-navBar"
            >
              <span className="header-label">CRUD</span>
            </NavLink>
          </p>
          <p>
            <NavLink
              to={`${props.match.url}/redbus`}
              style={{ textDecoration: "none" }}
              activeClassName="active-navBar"
            >
              <span className="header-label">Red Bus</span>
            </NavLink>
          </p>
          <p>
            <NavLink
              to={`${props.match.url}/amazon`}
              style={{ textDecoration: "none" }}
              activeClassName="active-navBar"
            >
              <span className="header-label">Amazon</span>
            </NavLink>
          </p>
          <p>
            <NavLink
              to={`${props.match.url}/facebook`}
              style={{ textDecoration: "none" }}
              activeClassName="active-navBar"
            >
              <span className="header-label">Facebook</span>
            </NavLink>
          </p>
        </div>
        <div className="empty"></div>
        <div className="login">
          <div>
            <svg
              style={{ fill: "fff" }}
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
              <path
                fillRule="evenodd"
                d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              style={{ fill: "fff" }}
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
              ></path>
            </svg>
          </div>
          <div>
            <img
              src={"https://avatars2.githubusercontent.com/u/31888467?s=60&v=4"}
              width="20"
              height="20"
              alt="sub"
              onClick={dropDown}
            />
            <div ref={dropBox} id="myDropdown" className="dropdown-content">
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path={`${props.match.path}/redbus`} component={RedbusHome} />
        <Route path={`${props.match.path}/amazon`} component={AmazonHome} />
        <Route path={`${props.match.path}/facebook`} component={FacebookHome} />
        <Route path={`${props.match.path}/crud`} component={AddDetails} />
      </Switch>
    </div>
  );
};
export default NavBar;
