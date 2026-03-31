'use client'

import Link from 'next/link';
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
  const current = "dashboard";

  const menu = [
    { name: "Dashboard", icon: <FiHome />, key: "dashboard" },
    { name: "Products", icon: <FiBox />, key: "products" },
    { name: "Users", icon: <FiUsers />, key: "users" },
    { name: "Data", icon: <FiDatabase />, key: "data" },
    { name: "Auth", icon: <FiLogIn />, key: "auth" },
  ];

  const products = [
    { name: "iPhone 15", category: "Electronics", price: "₹80,000" },
    { name: "Samsung TV", category: "Electronics", price: "₹55,000" },
    { name: "Laptop", category: "Electronics", price: "₹70,000" },
    { name: "T-Shirt", category: "Fashion", price: "₹999" },
    { name: "Jeans", category: "Fashion", price: "₹1,499" },
    { name: "Sneakers", category: "Fashion", price: "₹2,999" },
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

      <div className="ml-72 pt-20 px-6 w-full">

        <h1 className="text-2xl font-bold tracking-widest mb-6">Dashboard</h1>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          <Link href='/Products'>
            <div className="bg-gradient-to-r from-green-500/20 to-green-400/10 border border-green-400 rounded-lg p-4 hover:opacity-80">
              <h2 className="text-sm text-gray-300">Add Product</h2>
              <p className="text-lg font-semibold">+ New</p>
            </div>
          </Link>
          <div className="bg-white/10 rounded-lg p-4">
            <h2 className="text-sm text-gray-300">Total Products</h2>
            <p className="text-lg font-semibold">120</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h2 className="text-sm text-gray-300">Categories</h2>
            <p className="text-lg font-semibold">2</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <h2 className="text-sm text-gray-300">Users</h2>
            <p className="text-lg font-semibold">25</p>
          </div>

        </div>

        <div className="bg-white/5 rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-4">Products</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {products.map((item, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-4 border border-white/10">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-300">{item.category}</p>
                <p className="text-sm mt-1 text-green-400">{item.price}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}