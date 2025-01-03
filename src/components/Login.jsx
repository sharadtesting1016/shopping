// create form in component and
// Use React state to manage user authentication and user type

import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [userType, setUserType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Email: ", email);
    // console.log("Password: ", password);

    if (email === "admin" && password === "admin") {
      // console.log("ADMIN");
      setUser({ userType: "admin", isAuthenticated: true });
      setUserType("admin");
      setIsLoggedIn(true);
    } else if (email === "cust" && password === "cust") {
      // console.log("CUSTOMER");
      setUser({ userType: "customer", isAuthenticated: true });
      setUserType("customer");
      setIsLoggedIn(true);
    } else {
      setUser({ userType: "guest", isAuthenticated: false });
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    console.log("UserType: ", userType);
    console.log("IsLoggedIn: ", isLoggedIn);
  }, [userType, isLoggedIn]);

  if (isLoggedIn) {
    // console.log("Redirecting to: ", userType);

    return <Navigate to={`/${userType}`} />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
