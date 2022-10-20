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
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use href="/" />
          </svg>
          <span className="fs-4">LOGO</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/" className="nav-link" aria-current="page">
              Home
            </a>
          </li>
          {user ? (
            <>
              {" "}
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Schedules
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={onLogout} className="nav-link">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}

export default Header;
