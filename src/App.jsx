import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./shared/components/Layout";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import AdminDashboard from "./features/dashboard/pages/AdminDashboard";
import UserDashboard from "./features/dashboard/pages/UserDashboard";
import { ToastContainer } from "react-toastify";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/admin-dashboard", element: <AdminDashboard /> },
        { path: "/user-dashboard", element: <UserDashboard /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={routes} />
    </>
  );
}
