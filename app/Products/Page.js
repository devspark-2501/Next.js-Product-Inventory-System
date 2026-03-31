'use client'

import { FiSearch, FiPlus, FiFilter } from "react-icons/fi";

export default function ProductsPage() {
  return (
    <div className="ml-72 pt-20 px-6 w-full">

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-wide">Products</h1>

        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-medium">
          <FiPlus />
          Add Product
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 mb-6">

        <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg w-full max-w-[400px] border border-white/20">
          <FiSearch className="text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm w-full placeholder-gray-300"
          />
        </div>

        <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20">
          <FiFilter />
          Filter
        </button>

      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:scale-[1.02] transition">
          <div className="h-32 bg-white/5 rounded-lg mb-3"></div>
          <h3 className="font-semibold">iPhone 15</h3>
          <p className="text-sm text-gray-300">Electronics</p>
          <p className="text-green-400 mt-1">₹80,000</p>
        </div>

        <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:scale-[1.02] transition">
          <div className="h-32 bg-white/5 rounded-lg mb-3"></div>
          <h3 className="font-semibold">Samsung TV</h3>
          <p className="text-sm text-gray-300">Electronics</p>
          <p className="text-green-400 mt-1">₹55,000</p>
        </div>

        <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:scale-[1.02] transition">
          <div className="h-32 bg-white/5 rounded-lg mb-3"></div>
          <h3 className="font-semibold">Laptop</h3>
          <p className="text-sm text-gray-300">Electronics</p>
          <p className="text-green-400 mt-1">₹70,000</p>
        </div>

        <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:scale-[1.02] transition">
          <div className="h-32 bg-white/5 rounded-lg mb-3"></div>
          <h3 className="font-semibold">T-Shirt</h3>
          <p className="text-sm text-gray-300">Fashion</p>
          <p className="text-green-400 mt-1">₹999</p>
        </div>

      </div>

    </div>
  );
}