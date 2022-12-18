import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

import "./NavLinks.css";
import "./Logout.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li className="nav-link nav-link-ltr">
        <NavLink end to="/allusers">
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li className="nav-link nav-link-ltr">
          <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li className="nav-link nav-link-ltr">
          <NavLink to="/places/new">NEW PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li className="nav-link nav-link-ltr">
          <NavLink to="/auth">LOGIN/SIGNUP</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button className="logout" onClick={auth.logout}>
            LOGOUT
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
