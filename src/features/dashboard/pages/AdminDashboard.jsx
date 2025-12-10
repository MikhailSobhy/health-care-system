import Navbar from "@/shared/components/Navbar";
import { Avatar } from "@radix-ui/react-avatar";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminDashboard() {
  return (
    <>
      <AdminNavbar>
        <UserAvatar role="admin" name="admin" />
      </AdminNavbar>
    </>
  );
}
