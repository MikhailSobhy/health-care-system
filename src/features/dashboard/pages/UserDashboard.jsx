import Navbar from "@/shared/components/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import dash from "../../../assets/images/onboarding-img.png";

export default function UserDashboard() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative z-20 w-[80%] m-auto">
        <Navbar />
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${dash})` }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-[80%] m-auto text-center text-white flex flex-col gap-5 max-w-2xl">
          <p className="text-2xl md:text-5xl font-bold">
            Welcome Back, Start Your Health Journey
          </p>

          <p className="text-gray-300 text-md md:text-lg">
            Find a specialist and schedule your next visit in just a few clicks.
            Your well-being is our priority.
          </p>

          <div className="mt-5">
            <Link
              to=""
              className="bg-[#24AE7C] py-3 px-5 rounded-md font-bold hover:bg-[#1c8b63] transition"
            >
              + Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
