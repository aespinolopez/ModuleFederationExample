import React from "react";
import ReactDom from "react-dom";
import { Component1, Component2 } from "library1";
import { Component3, Component4 } from "library2";

function App() {
  return (
    <>
      <h2>Hello from Shell!</h2>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
