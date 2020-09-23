import React from "react";
import styled from "styled-components";
import "./Home.css";
import RedBusBody from "./Body";

const NavBar = styled.nav`
  color: #fff;
  background-color: #d84f57;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-evenly;
`;
const ListItem = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #f9e7ea;
`;

export const RedbusHome: React.FunctionComponent = () => {
  const [navMenu, setNavMenu] = React.useState<string[]>([
    "BUS TICKETS",
    "rPool",
    "BUS HIRE",
  ]);
  const image = `https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png`;
  console.log(image);
  return (
    <>
      <header>
        <NavBar>
          <div className="home-details">
            <img src={image} height="50" width="80" />
            <Wrapper>
              {navMenu.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </Wrapper>
          </div>
          <div style={{ width: "40%" }}></div>
          <div className="login-details">
            <div>Help</div>
            <div>Manage Booking</div>
            <div className="user-login"></div>
          </div>
        </NavBar>
        <RedBusBody />
      </header>
    </>
  );
};
