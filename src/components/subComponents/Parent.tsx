import React from "react";
import { ClassComp, FunComp } from "./index";
export default function Parent() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <ClassComp />
      <FunComp />
    </div>
  );
}
