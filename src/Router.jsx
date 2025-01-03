import React, { useContext } from "react";
import { UserContext } from "./components/UserContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Admin from "./components/Admin";
import Products from "./components/Products";
import PrivateRoute from "./components/PrivateRoute";
import JWTLogin from "./components/JWTLogin";
import Coupons from "./components/Coupons";
const AppRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Menu userType={user.userType} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/home" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/login" element={<JWTLogin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
