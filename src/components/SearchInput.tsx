// components/SearchInput.jsx
import React from "react";

export default function SearchInput() {
  return (
    <div className="flex items-center w-64 bg-white border rounded-full shadow-sm p-2">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent text-gray-500 text-sm outline-none px-3"
      />
      <button className="w-8 h-8 bg-[#E5E5E5] rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}
