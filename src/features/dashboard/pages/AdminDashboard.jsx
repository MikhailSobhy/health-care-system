import React from "react";
import UserAvatar from "../components/UserAvatar";
import AdminNavbar from "../components/AdminNavbar";
import Cards from "../components/Cards";
import { AdminTable } from "../components/AdminTable";

export default function AdminDashboard() {
  return (
    <>
      <AdminNavbar>
        <UserAvatar role="admin" name="admin" />
      </AdminNavbar>
      <Cards />
      <AdminTable />
    </>
  );
}
