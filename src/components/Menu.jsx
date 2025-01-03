// Conditionally render menu items based on user type

import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
//import { FavoritesContext } from "./FavoritesContext";

const Menu = () => {
  const { user } = useContext(UserContext);
  const { userType, email, token, isAuthenticated } = user;
  //const { favoritesCount } = useContext(FavoritesContext);

  // display current context values

  console.log("====================================");
  console.log("User Context:", user);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Shopping App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {userType === "admin" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/coupons">
                    Coupons
                  </Link>
                </li>
              </>
            )}
            {userType === "customer" && (
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
            )}
            {/* {userType === "customer" && (
              <li className="nav-item">
                <Link className="nav-link" to="/catprod">
                  API-Products
                </Link>
              </li>
            )}
            {userType === "customer" && (
              <li className="nav-item">
                <Link className="nav-link" to="/feed">
                  Feeds
                </Link>
              </li>
            )}
            {userType === "customer" && (
              <li className="nav-item position-relative">
                <Link className="nav-link" to="/fav">
                  <b>Favorites</b>
                </Link>
                <span className="badge rounded-pill bg-success position-absolute top-0 start-100 translate-middle">
                  {favoritesCount}
                </span>
              </li>
            )} */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <span className="navbar-text ms-auto d-flex">
            Welcome, {userType.charAt(0).toUpperCase() + userType.slice(1)}{" "}
            {email && `(${email})`}
          </span>
          <span className="navbar-text ms-auto d-flex">
            {!isAuthenticated ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
