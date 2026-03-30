'use client'

import { useState } from 'react'
import { 
  FiHome, 
  FiBox, 
  FiUsers, 
  FiDatabase, 
  FiLogIn 
} from "react-icons/fi";

export default function Home() {
  const [open, setOpen] = useState(true);
  const current = "dashboard"; // change this based on route

  const menu = [
    { name: "Dashboard", icon: <FiHome />, key: "dashboard" },
    { name: "Products", icon: <FiBox />, key: "products" },
    { name: "Users", icon: <FiUsers />, key: "users" },
    { name: "Data", icon: <FiDatabase />, key: "data" },
    { name: "Auth", icon: <FiLogIn />, key: "auth" },
  ];

  return (
    <div className="flex">

      <div className={`
        fixed top-0 left-0 h-full w-72
        bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364]
        text-white shadow-lg transform transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>

        <div className="p-5 text-xl font-semibold tracking-wide border-b border-white/10">
          Inventory
        </div>


        <div className="p-4 space-y-2">

          {menu.map((item) => {
            const active = current === item.key;

            return (
              <div
                key={item.key}
                className={`
                  flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
                  transition-all duration-200

                  ${active 
                    ? 'bg-gradient-to-r from-green-500/20 to-green-400/10 border border-green-400 text-green-300 shadow-md' 
                    : 'hover:bg-white/10 text-gray-300'}
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            );
          })}

        </div>

      </div>

      <div className="ml-72 pt-20 w-full">
        <h1 className="text-2xl font-bold tracking-widest">Products</h1>
      </div>
        <div>
          <div className='bg-[#0f2027] pt-100'>

          </div>
        </div>
    </div>
  );
}