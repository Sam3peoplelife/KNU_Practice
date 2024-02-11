import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/home">
            <h6>MINISTRY</h6>
          </Link>
          <Link className="link" to="/?cat=truth">
            <h6>TRUTH</h6>
          </Link>
          <Link className="link" to="/?cat=peace">
            <h6>PEACE</h6>
          </Link>
          <Link className="link" to="/?cat=freedom">
            <h6>FREEDOM</h6>
            </Link>
          <Link className="link" to="/">
            <h6>OPINIONS</h6>
          </Link>
          
          
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
