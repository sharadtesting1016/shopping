import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function JWTLogin() {
  const login_url = "https://localhost:7002/api/auth/login";
  // const users_url = "https://localhost:7001/api/coupons";
  const users_url = "https://localhost:7777/api/coupons";

  const { setUser } = useContext(UserContext);
  const [userName, setEmail] = useState("sharad@gmail.com");
  const [password, setPassword] = useState("Sharad@123");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  function fetchToken(userName, password) {
    console.log("userName: ", userName, "password: ", password);

    fetch(login_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("data :", data);
        console.log(data.result.token);

        setToken(data.result.token);
        // setUser(data.user);
        setIsLoggedIn(true);

        // fetch user details and check if user is admin
        fetch(users_url, {
          headers: {
            Authorization: `Bearer ${data.result.token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Coupons Data:", data.result);
            localStorage.setItem("coupons", JSON.stringify(data.result));
          });
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Unable to log in with provided credentials.");
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchToken(userName, password);
  };

  if (isLoggedIn) {
    return <Navigate to="/coupons" />;
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={userName}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {error && (
          <div id="err" className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </form>
      {/* add a new user Registration */}
      <div className="mt-3">
        <a href="/register">New User? Register</a>
      </div>
    </div>
  );
}
