import React from "react";
import { createRoot } from "react-dom/client";

// React Element
// const heading = React.createElement("h1", { id: "heading" }, "Hello React!!");

// JSX
// const jsxHeading = <h1 id='heading'>Namaste React using JSX</h1>

const Title = () => {
  return <h1>Namaste React using JSX</h1>;
};

// Component composition
const Header = () => (
  <div className="header">
    <div className="logo">
      <img
        className="logo"
        src="https://cdn.pixabay.com/photo/2020/08/05/13/28/eco-5465482_640.png"
        alt="logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = ()=>{
    return (
        <div className="res-card">
            <h3>Call Me Chow</h3>

        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search" />
      </div>
      <div className="res-container">
        {/* Restaurant card */}
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
