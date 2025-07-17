// import foodFireLogo from "../../public/images/foodFireLogo.png";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={
        "https://github.com/chetannada/Namaste-React/blob/main/public/Images/foodFireLogo.png?raw=true"
      }
      alt="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <LuShoppingCart />
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
