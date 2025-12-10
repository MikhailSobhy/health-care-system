import React from "react";
import logo from "../../assets/icons/logo-full.svg";
import { Link } from "react-router-dom";
export default function Navbar({ children, className }) {
  return (
    <div className={`py-5 flex items-center justify-between ${className}`}>
      <Link to={"/"}>
        <img src={logo} alt="Full Logo" />
      </Link>
      {children}
    </div>
  );
}
