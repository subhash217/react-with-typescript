import React from "react";
import ClassComp from "./ClassComp";
import FunComp from "./FunComp";
export default function Parent() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <ClassComp />
      <FunComp />
    </div>
  );
}
