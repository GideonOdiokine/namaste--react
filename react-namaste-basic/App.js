import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" },  [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),

  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const element = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Namaste React"
);

const root = createRoot(document.getElementById("root"));

root.render(element);
