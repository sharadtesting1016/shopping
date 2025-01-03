// add logout component

import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser({
      userType: "guest",
      isAuthenticated: false,
      email: "",
      token: "",
    });
    navigate("/");
  }, [setUser, navigate]);
  // return <Navigate to="/" />;
  // return <Navigate to={`/${userType}`} />;
};

export default Logout;
