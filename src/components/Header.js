import { useState } from "react";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../utils/userSlice";

// Title component for display logo
const Title = () => (
  <Link to="/">
    <img
      className="logo"
      src={
        "https://github.com/chetannada/Namaste-React/blob/main/public/Images/foodFireLogo.png?raw=true"
      }
      alt="Food Fire Logo"
      title="Food Fire Logo"
    />
  </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const isLoggedin = useSelector((store) => store.user.isLoggedin);

  const { isOnline } = useOnlineStatus();
  const navigate = useNavigate();

  //   Subscribe to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaShoppingCart />{" "}
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
                <span
                  className={isOnline ? "login-btn-green" : "login-btn-red"}
                >
                  {" "}
                  ●
                </span>
              </button>
            ) : (
              <button
                className="login-btn"
                onClick={() => dispatch(login(true))}
              >
                Login
                <span
                  className={isOnline ? "login-btn-green" : "login-btn-red"}
                >
                  {" "}
                  ●
                </span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
