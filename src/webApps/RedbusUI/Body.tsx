import React from "react";
import "./Body.css";
import styled from "styled-components";

const Intro = styled.div`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.19px;
`;

const IntroPara = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.16px;
  margin-top: 8px;
  height: 30px;
  width: 315px;
  color: #3d3d3d;
`;
const KnowButton = styled.button`
  font-size: 12px;
  border: none;
  border-radius: 3px;
  background-color: #d84e55;
  color: #fff;
  padding: 4px 12px;
  font-weight: 700;
  margin-top: 50px;
`;
export default function RedBusBody() {
  const saftey =
    "https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg";
  return (
    <>
      <div>
        <main>
          <div className="journey-details">
            <input type="text" placeholder="FROM" className="input-class" />
            <input type="text" placeholder="TO" className="input-class" />
            <input type="text" placeholder="DATE" className="input-class" />
            <button className="search-button">Search Buses</button>
          </div>
          <div></div>
        </main>
      </div>
      <section className="safety-plus-tile">
        <div>
          <img src={saftey} alt="" width="60" height="70" />
        </div>
        <div>
          <Intro>Introducing Safety+ Program</Intro>
          <IntroPara>
            A Unique certification Program to ensure in all safety buses
          </IntroPara>
        </div>
        <div>
          <KnowButton>KNOW MORE</KnowButton>
        </div>
      </section>
    </>
  );
}
