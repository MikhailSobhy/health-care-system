import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="bg-[#131619] min-h-screen ">
        <Outlet />
      </div>
    </>
  );
}
