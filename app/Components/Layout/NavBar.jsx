'use client'

import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-72 right-0 z-40 flex items-center justify-between px-4 md:px-8 py-3 
    bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white shadow-md">

      {/* 
        <div className="flex items-center gap-3">
            <Image 
            src="/asset/logo.png" 
            alt="logo" 
            width={60} 
            height={60} 
            className="rounded-md"
            />
            <span className="font-semibold text-lg tracking-wide">
            INVENTORY
            </span>
        </div> 
      */}

      <div className="flex-1 flex justify-start px-6">
        <div className="flex items-center gap-2 bg-transparent backdrop-blur-md 
        px-4 py-2 rounded-lg w-full max-w-[400px] border border-white/20">

          <FiSearch className="text-gray-300" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full placeholder-gray-300"
          />
        </div>
      </div>

      <div className="w-[50px]"></div>

    </div>
  );
}