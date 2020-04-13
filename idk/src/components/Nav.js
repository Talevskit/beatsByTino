import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const style = {
    color: "white",
  };
  return (
    <nav>
      <ul className="link">
        <Link style={style} to="/login">
          <li>Login</li>
        </Link>
        <Link style={style} to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
