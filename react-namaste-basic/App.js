import React from "react";
import { createRoot } from "react-dom/client";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello React!!");

// JSX
const jsxHeading = <h1 id='heading'>Namaste React using JSX</h1>


const root = createRoot(document.getElementById("root"));

root.render(jsxHeading);


