import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <div className="navbar">
      <nav>
        {user && <Link onClick={() => logout()}>Logout</Link>}
        {!user && <Link to="/signup">Sign up</Link>}
        {!user && <Link to="/login">Login</Link>}
      </nav>
    </div>
  );
};

export default Navbar;
