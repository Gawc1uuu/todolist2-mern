import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link>Logout</Link>
        <Link>Sign up</Link>
        <Link>Login</Link>
      </nav>
    </div>
  );
};

export default Navbar;
