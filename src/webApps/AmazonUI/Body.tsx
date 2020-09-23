import React from "react";
import "./Body.scss";
import styled from "styled-components";
import amazon from "../../amazon.png";

const Div = styled.div`
  width: 1.2rem;
  height: 2px;
  background-color: #fff;
  border-radius: 10px;
  margin: 7px;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

export function AmazonHome() {
  return (
    <>
      <div className="wrapper">
        <div className="menu-border">
          <div>
            <Div />
            <Div />
            <Div />
          </div>
        </div>
        <img src={amazon} width="82" height="40" />
        <div>
          <button>All</button>
          <input type="text" />
          <button>S</button>
        </div>
      </div>
    </>
  );
}
