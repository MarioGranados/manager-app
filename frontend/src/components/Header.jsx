import React from "react";
import "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="container">
      {user ? (
        <button onClick={onLogout}>logout</button>
      ) : (
        <a href="/login">Login</a>
      )}

      <a href="/register">Register</a>
      <a href="/">Home</a>
    </div>
  );
}

export default Header;
