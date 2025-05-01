"use client";

import { Calendar, Medal, Menu, Search, User, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import CustomDatePicker from "./DatePicker";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 sm:px-20 py-5 shadow-md bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-green-500">
          <Image src="/logo.png" alt="logo" height={30} width={30} />
        </div>

        {/* Center: Inputs (Desktop) */}
        <div className="hidden sm:flex gap-4 items-center">
          <CustomDatePicker />
          <SearchInput />
        </div>

        {/* Right: Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="hover:cursor-pointer flex items-center gap-1 bg-gray-100 text-green-900 font-medium rounded-full px-6 py-3">
            <Medal className="w-4 h-4" />
            <span className="text-sm">Leaderboard</span>
          </button>

          <button className="border hover:cursor-pointer border-green-900 text-green-900 font-medium rounded-full px-6 py-3 text-sm">
            Login / Sign up
          </button>

          <div className="flex hover:cursor-pointer items-center gap-2 px-4 py-1.5 rounded-full border shadow bg-white">
            <Menu className="w-5 h-5 text-gray-600" />
            <Image
              src="/user.png"
              alt="user"
              width={28}
              height={28}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Right: Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Shown when hamburger is clicked */}
      <div
        className={clsx(
          "sm:hidden flex flex-col items-center gap-6 mt-6 p-6 bg-white rounded-lg shadow-lg",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <CustomDatePicker />
        <SearchInput />
        <button className="hover:cursor-pointer flex items-center gap-1 bg-gray-100 text-green-900 font-medium rounded-full px-6 py-3 w-full">
          <Medal className="w-4 h-4" />
          <span className="text-sm">Leaderboard</span>
        </button>
        <button className="border hover:cursor-pointer border-green-900 text-green-900 font-medium rounded-full px-6 py-3 text-sm w-full">
          Login / Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
