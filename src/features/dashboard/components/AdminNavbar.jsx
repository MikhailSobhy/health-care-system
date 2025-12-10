import Navbar from "@/shared/components/Navbar";
import React from "react";
import UserAvatar from "./UserAvatar";

function AdminNavbar() {
  return (
    <div className="bg-black rounded-md  mx-2 ">
      <Navbar className="px-4 md:px-8 lg:px-16">
        <UserAvatar role="admin" name="admin" />
      </Navbar>
    </div>
  );
}

export default AdminNavbar;
