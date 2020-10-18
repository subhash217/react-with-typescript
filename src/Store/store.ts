import { createStore } from "redux";
function reducer() {
  return {
    name: "subash",
    age: 3,
  };
}
export const store = createStore(reducer);
